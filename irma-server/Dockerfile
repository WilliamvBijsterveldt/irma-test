FROM golang:1.20

WORKDIR /usr/src/app

RUN go install github.com/privacybydesign/irmago/irma@latest

COPY . .

CMD ["irma" , "server"]