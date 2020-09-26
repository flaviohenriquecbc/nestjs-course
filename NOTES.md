# NOTES FROM THE COURSE
## NestJS Fundamentals


CLI to create controllers:
```
nest g co
nest generate controller
```

CLI to create controllers on a specific folder:
```
nest g co modules/abc --dry-run
```
* --dry-run : simulates the output

Create services:
```
nest g s coffess
```

Create modules:
```
nest g module coffees
```

Create DTOs:
```
nest g class coffees/dto/create-coffee.dto --no-spec
```
* --no-spec : doesnt create test file

Use exceptions:
```
throw new NotFoundException(`Coffee #${id} no found`);
throw new HttpException(`Coffee #${id} no found`, HttpStatus.NOT_FOUND);
```

Start containers in detached / background mode
```
docker-compose up -d
```
