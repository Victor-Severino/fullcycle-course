# Stage 1
FROM golang:1.16-alpine3.13 AS builder

WORKDIR /go/src/app
COPY . .

RUN go mod init example/hello
RUN go get -d -v ./...
RUN go install -v ./...

# Stage 2
FROM scratch
WORKDIR /go/bin
COPY --from=builder /go/bin .

ENTRYPOINT ["/go/bin/hello"]
