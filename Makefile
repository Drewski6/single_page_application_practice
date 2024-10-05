all:
	docker compose up -d

up:
	docker compose up -d

build:
	docker compose build

down:
	docker compose down

logs:
	docker compose logs -f

clean: down
	docker container prune -f
	docker image prune -af
	docker volume prune -af
	docker network prune -f

fclean: clean
	docker system prune -af

re: fclean all

status:
	docker ps -a && docker images && docker volume ls && docker network ls

enter-django:
	docker exec -it django bash