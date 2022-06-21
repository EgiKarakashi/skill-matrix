# HASURA SEED SOURCE
# it is used in the
from?=dummy

# HASURA MIGRATION STEPS
# it is used in the hasura postgres migration scripts to control
# how many up/down migrations to applu
steps?=1



#
# Project Management
#

start:
	@echo "Starting the project..."
	@docker-compose up -d
	@docker-compose logs -f

stop:
	@echo "Stopping the project..."
	@docker-compose down

logs:
	@docker-compose logs -f

clear: stop
	@echo "Destroy local data..."
	@sudo rm -rf .docker-data

restart: stop start
reset: stop clear start

install-cli:
	@curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash



#
# Hasura State Management
#

start-hasura:
	@echo "Starting the project..."
	@docker-compose up -d hasura-engine adminer
	@docker-compose logs -f

init:
	@echo "Applying migrations to all databases..."
	@hasura migrate apply --project hasura-migrations --all-databases
	@echo "Applying Hasura metadata..."
	@hasura metadata apply --project hasura-migrations
	@echo "Seeding the main database from: \"$(from).sql\"..."
	@hasura seed apply --project hasura-migrations --database-name default --file $(from).sql

seed:
	@echo "Seeding the main database from: \"$(from).sql\"..."
	@hasura seed apply --project hasura-migrations --database-name default --file $(from).sql


#
# PostgreSQL Migration Utilities
#

migrate:
	@hasura migrate apply --project hasura-migrations --database-name default
	
migrate-status:
	@hasura migrate status --project hasura-migrations --database-name default


migrate-up:
	@hasura migrate apply --project hasura-migrations --database-name default --up $(steps)

migrate-down:
	@hasura migrate apply --project hasura-migrations --database-name default --down $(steps)

migrate-redo:
	@hasura migrate apply --project hasura-migrations --database-name default --down $(steps)
	@hasura migrate apply --project hasura-migrations --database-name default --up $(steps)

migrate-create:
	@hasura migrate create \
		"$(name)" \
		--up-sql "SELECT NOW();" \
		--down-sql "SELECT NOW();" \
		--database-name default \
		--project hasura-migrations