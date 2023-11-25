# POC Containers

This monorepo reused most of the code found in aother repo of mine, [poc-api-gateway](https://github.com/ermartinez13/poc-api-gateway), in order to streamline my experimentation with docker containers.

For each existing service (eg. `foo`, `bar`, `gateway`), I created a Dockerfile to run the service in a container.

Then I created a docker-compose file to spin-up all the services at once. My biggest challenge was figuring out how to get the containerized services to talk to each other. Eventually, I was able to find the solution and I made sure to add a comment about it, twice, on the compose file so that I don't forget.
