# Display

## Getting Started With Docker

To get started with Display part of GPU monitoring-AURORA, follow these steps:

- Navigate to Display directory:

```bash
cd ./Display
```

- Build the Display image:
```bash
docker build -t display . 
```

- Run the Display container, mapping port 80 to a host port:

```bash
docker run -d --name display-container -p host-port:80 display
```
Replace host-port with the desired port on your host machine to access the AURORA Display interface.

Once the containers are running, you can access the AURORA application by accessing the appropriate URLs or ports based on the display-container configurations, it should looks like : ```http://localhost:host-port```