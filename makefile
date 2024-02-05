dev:
	npm run start:dev
lint:
	npm run lint
build:
	npm run build
up:
	docker-compose up -d
app:
	docker-compose up --no-deps app
app-demon:
	docker-compose up -d app
app-no-deps:
	docker-compose up -d --no-deps app
postgres:
	docker-compose up -d postgres
redis:
	docker-compose up -d redis
down:
	docker-compose down
restart-app:
	docker-compose up -d --build app
logs:
	docker-compose logs -f app
clean:
	docker-compose down -v
alive:
	docker ps
zombie:
	docker ps -a	
clean-zombie:
	docker rm $$(docker ps --filter "status=exited" --filter "status=dead" -q)
clean-postgres:
	docker ps -a | grep '(postgres)' | awk 'NR >1 {print $1}' | xargs docker rm
clean-redis:
	docker ps -a | grep '(redis)' | awk 'NR >1 {print $1}' | xargs docker rm
clean-app:
	docker ps -a | grep -vE '(redis|postgres)' | awk 'NR >1 {print $1}' | xargs docker rm
build-app:
	docker-compose up -d --no-deps --build app
build-app-file:
	docker-compose build app