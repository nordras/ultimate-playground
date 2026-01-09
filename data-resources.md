# Data Resources

## Technologies

### Infrastructure & Cloud

| Technology |
|------------|
| ArgoCD |
| AWS AMI / Packer |
| AWS Auto Scaling Groups |
| AWS EC2 |
| AWS ELB / ALB |
| AWS RDS |
| AWS Redshift |
| AWS Route 53 |
| AWS S3 |
| AWS Security Groups |
| AWS VPC Flow |
| Cloud Trail |
| Cloud Watch |
| Helm |
| Jenkins / Groovy DSL |
| K8s / EKS |
| Terraform / OpenTofu |
| Trivy / tfsec / Checkov / Terrascan / TFLint / KubeLinter |

### Programming Languages & Frameworks

| Technology |
|------------|
| Java |
| Python 3x |
| Spring Boot |

### Databases

| Database |
|----------|
| MySQL |
| Postgres |
| Redis |

### Data Processing & Streaming

| Technology |
|------------|
| Airflow |
| Apache Beam |
| Apache Flink |
| Apache Kafka |
| Apache NiFi |
| Apache Pulsar |
| Apache Spark |
| Hadoop ecosystem (HDFS, MapReduce, Hive) |
| Kafka |
| Kafka Streams |
| KSQLDB |
| Luigi |

### Analytics & Query Engines

| Technology |
|------------|
| Druid |
| Presto |
| Snowflake |
| Trino |

### Monitoring & Observability

| Tool |
|------|
| ELK |
| Grafana |
| OpenSearch / ElasticSearch |
| Prometheus |
| Splunk |

### Storage Formats

| Format |
|--------|
| Avro |
| Delta Lake |
| Iceberg |
| JSON |
| ORC |
| Parquet |

### Performance Tuning

| Area |
|------|
| Database Tunning |
| GC Tunning |
| JVM Tunning |
| K8s Tunning |
| Linux Tunning |

### Methodologies

| Methodology |
|-------------|
| DDD |
| Data Mash |
## Data Techniques

| Technique |
|-----------|
| API-first data integration |
| Backpressure handling in streaming systems |
| Batch vs real-time processing strategies |
| Caching layers and materialized views |
| Change data capture (CDC) |
| Columnar storage formats (Parquet, ORC) |
| Complex event processing (CEP) |
| Data aggregation and rollup strategies |
| Data compression techniques |
| Data denormalization for analytics |
| Data federation vs data virtualization |
| Data partitioning and sharding |
| Data replication strategies (sync vs async) |
| ETL vs ELT patterns |
| Event sourcing patterns |
| Event-driven architecture patterns |
| Indexing strategies for analytics |
| Master data management (MDM) |
| Query optimization and execution planning |
| Schema-on-read vs schema-on-write |
| Slowly changing dimensions (SCD) handling |
| Stream processing and windowing |
| Stream-stream and stream-table joins |
| Time-series data processing patterns |
| Watermarking for late-arriving data |
Data Engineering Code Challenges Round 1
Create an Airflow DAG that extracts data from PostgreSQL, transforms it with Spark, and loads to Redshift. Include data quality checks and error handling.
Build a real-time streaming pipeline using Kafka, Spark Structured Streaming, and Delta Lake. Process IoT sensor data with windowing and aggregations.
Create a dbt project with dimensional modeling (fact/dimension tables), tests, documentation, and CI/CD pipeline deployment to Snowflake.
Build a Docker Compose setup with Kafka, Spark, PostgreSQL, and Jupyter. Create a complete data pipeline that processes sample e-commerce data.
Create Terraform scripts to deploy: S3 data lake with proper partitioning, Glue catalog, Glue ETL job, Lambda for data validation, and IAM roles.
Build a Python data pipeline using Pandas that reads from multiple CSV sources, performs data cleaning/validation, and outputs to both PostgreSQL and Parquet files.
Create a real-time CDC pipeline using Debezium, Kafka Connect, and Elasticsearch. Capture changes from MySQL and make them searchable in near real-time.
Data Engineering Code Challenges Round 2
Build a serverless data pipeline using AWS Lambda, Step Functions, and S3. Process JSON files, transform with Pandas, and load to DynamoDB.
Create a Kubernetes operator in Go that automatically provisions Spark clusters and manages data processing jobs based on custom resource definitions.
Build a data quality monitoring system using Great Expectations, deployed on Kubernetes with alerts to Slack when data quality issues are detected.
Create a multi-tenant data platform using Apache Iceberg tables with row-level security, deployed on EKS with Trino for querying.
Build a feature store using Feast, deployed on Kubernetes, with both batch and real-time feature serving for ML pipelines.
Create a data lineage tracking system using Apache Atlas or DataHub, integrated with Airflow and dbt to automatically track data dependencies.
Deploy a complete lakehouse architecture using Delta Lake on S3, with Spark on EKS, Hive Metastore, and Superset for visualization. Include data governance, performance tuning, and cost optimization.
Data Engineering Code Challenges Round 3
Create a data mesh implementation with domain-specific data products, each with their own CI/CD, data contracts, and SLA monitoring.
Build a real-time fraud detection pipeline using Kafka Streams, feature engineering with time windows, and model serving with MLflow on Kubernetes.
Create a data observability platform using OpenTelemetry, Grafana, and Prometheus to monitor data pipelines, including latency, throughput, and error rates.
Build a data archiving solution using Apache Pulsar for event streaming, with automatic tiered storage to S3 Glacier for cold data.
Create a data catalog with automated metadata extraction from various data sources (databases, files, APIs) using Apache Nifi and store in Apache Atlas.
Build a real-time recommendation engine using Apache Flink, integrating with Kafka for user events and serving recommendations via a REST API.
Create a data governance framework with Apache Ranger for access control, Apache Atlas for metadata management, and integration with dbt for data lineage tracking.
## Books

| Title |
|-------|
| Accelerate |
| Continuous Modernization |
| Data Engineering Design Patterns: Recipes for Solving the Most Common Data Engineering Problems |
| Data Intensive Applications |
| Data Pipelines Pocket Reference: Moving and Processing Data for Analytics |
| Financial Data Engineering: Design and Build Data-Driven Financial Products |
| Fundamentals of Data Engineering: Plan and Build Robust Data Systems |
| Learning Spark: Lightning-Fast Data Analytics |
| Principles of Software Architecture Modernization |
| Refactoring Databases: Evolutionary Database Design |
| Spark: The Definitive Guide: Big Data Processing Made Simple |
| Stream Processing with Apache Flink: Fundamentals, Implementation, and Operation of Streaming Applications |
| Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing |
| The DevOps Handbook |
| The Phoenix Project |