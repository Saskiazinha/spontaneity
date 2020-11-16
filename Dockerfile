FROM openjdk:15-oracle

MAINTAINER Saskia Busch <busch.saskia09@gmail.com>

ADD backend/target/spontaneity.jar app.jar

CMD ["sh" , "-c", "java -jar -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGO_DB_URI app.jar"]
