FROM node:14-alpine

ENV XAPP_HOME /xapp
ENV TZ Asia/Makassar
ENV PORT 3001
ENV TEMP_HOME /tmp/fe

RUN mkdir ${XAPP_HOME} \
    && mkdir ${TEMP_HOME}

COPY . ${TEMP_HOME}

WORKDIR ${TEMP_HOME}

RUN npm install \
    && npm run build \
    && cp -vr ${TEMP_HOME}/build/* ${XAPP_HOME} \
    && npm install --global serve

WORKDIR ${XAPP_HOME}

RUN rm -fr ${TEMP_HOME}

EXPOSE ${PORT}

CMD ["serve", "/xapp"]