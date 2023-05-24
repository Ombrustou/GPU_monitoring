FROM python:3.9
WORKDIR /app
COPY requirements.txt /app
RUN pip install -r requirements.txt
COPY querying.py /app

CMD ["python", "querying.py","1","100",]