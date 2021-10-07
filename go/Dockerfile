# Stage 1
FROM golang:1.17-alpine AS builder

WORKDIR /go/src/app
COPY . .
RUN go mod init example/hello && \
    go get -d -v ./... && \
    go install -v ./...

# Stage 2
FROM scratch
WORKDIR /go/bin
COPY --from=builder /go/bin .

ENTRYPOINT ["/go/bin/hello"]
