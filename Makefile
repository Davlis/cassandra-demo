build:
	docker build -t davlis/cassandra-demo .

run:
	docker run -p 48080:8080 -d davlis/cassandra-demo

network:
	docker network create cassandra-demo-network --driver bridge

compose:
	docker-compose up

stats:
	docker stats

exec:
	docker exec -it <container-id> /bin/sh

compose-dev:
	docker-compose -f docker-compose.dev.yml up --build
