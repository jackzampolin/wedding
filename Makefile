SRCDIR := $(shell pwd)
NAME := wedding
TAG := latest
DOCKER_REGISTRY=gongled

.PHONY: build install run start stop rm pull clean

build:
	docker build . -t $(DOCKER_REGISTRY)/$(NAME):$(TAG)

install:
	docker push $(DOCKER_REGISTRY)/$(NAME):$(TAG)

run:
	docker run -d -p 8080:8080 --name $(NAME) $(DOCKER_REGISTRY)/$(NAME):$(TAG)

start:
	docker start $(NAME)

stop:
	docker stop $(NAME)

rm:
	docker rm -f $(NAME)

pull:
	docker pull $(DOCKER_REGISTRY)/$(NAME):$(TAG)

clean:
	docker rmi $(DOCKER_REGISTRY)/$(NAME):$(TAG)

