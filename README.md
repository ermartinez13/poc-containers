# POC Containers

This monorepo reuses most of the code found [here](https://github.com/ermartinez13/poc-api-gateway), in order to streamline my experimentation with docker containers.

For each existing service (eg. `foo`, `bar`, `gateway`), I added Dockerfiles to be able to independently run each service in a container.

Then, I created a docker-compose file to spin-up all the services at once.

Initially, I did not know that the compose file could simply point to the existing Dockerfiles. Thus, I tried to redefine the container images within the compose file as shown by the gateway service definition. This did work, but it won't be my preffered approach moving forward as there are certain configuration settings (eg. volumes, ports, command) that I have yet to fully understand.

The biggest and final challenge was figuring out how to get the containerized services to talk to each other. Eventually, I found the solution in the docs which, as is often the case, was rather straightforward once you knew what to look for.
