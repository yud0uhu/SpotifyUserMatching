FROM python:3.8

WORKDIR /usr/src/api

COPY requirements.txt ./api/

RUN pip install --trusted-host pypi.python.org -r ./api/requirements.txt &&\
  rm -rf ~/.cache/pip

COPY ./api /usr/src/api

CMD gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app