FROM python:3.8

WORKDIR /usr/src/api
COPY requirements.txt ./
RUN pip install --trusted-host pypi.python.org -r requirements.txt &&\
  rm -rf ~/.cache/pip
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]