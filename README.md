<p align="center">
<img width="300" height="150" src="https://raw.githubusercontent.com/gongled/wedding/master/logo.png" />
</p>

# About

Open source template of unique wedding's invitation website.

## Quick start

1. Build an image on your machine

    ```
    make
    ```

2. Run container

    ```
    make run
    ```

3. Open your browser on page [http://localhost:8080](http://localhost:8080)

Now you can deploy your application into the Docker cluster.

## Advanced

1. Build an image on your machine

    ```
    docker build . -t gongled/wedding:latest 
    ```

2. Run a container

    ```
    docker run -d -p 8080:8080 -v `pwd`:/app --name wedding gongled/wedding:latest
    ```

    Keep in mind, that you should mount the current directory into the `/app` inside of container.

3. Install dependencies and build project

    ```
    docker exec -it wedding bash /app/build.sh
    ```

    _Otherwise you could run the shell and execute command manually._

4. Open your browser on page [http://localhost:8080](http://localhost:8080)

Great. Now you are ready to deploy project from the `public` directory.

## License

MIT
