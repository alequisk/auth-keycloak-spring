FROM maven:3-amazoncorretto-17 as builder

WORKDIR /opt/app

COPY pom.xml .
RUN mvn dependency:go-offline
# quando faco isso, nao preciso ficar baixando dependencias novamente na proxima compilacao

COPY ./src ./src

RUN mvn clean package -DskipTests

FROM amazoncorretto:17-alpine

WORKDIR /app
COPY --from=builder /opt/app/target/*.jar gateway.jar

CMD ["java", "-jar", "gateway.jar"]