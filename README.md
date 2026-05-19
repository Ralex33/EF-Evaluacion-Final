# AWS DevOps Project

## Overview
This project demonstrates a complete AWS DevOps pipeline for deploying a Node.js Express.js application. It includes infrastructure provisioning with Terraform, continuous integration with GitHub Actions, and load testing with k6.

---

## Architecture Overview
The application architecture consists of the following components:
- **VPC**: A Virtual Private Cloud to isolate resources.
- **Public Subnets**: Two public subnets for the Application Load Balancer and EC2 instance.
- **Internet Gateway**: Provides internet access to resources in the public subnets.
- **Application Load Balancer (ALB)**: Distributes traffic to the EC2 instance.
- **EC2 Instance**: Hosts the Node.js Express.js application.
- **Security Groups**: Controls inbound and outbound traffic for the ALB and EC2 instance.

---

## Terraform Infrastructure
The infrastructure is provisioned using Terraform and includes:
- **provider.tf**: Configures the AWS provider.
- **variables.tf**: Defines reusable variables for the infrastructure.
- **main.tf**: Contains the main resources such as VPC, subnets, ALB, EC2, and security groups.
- **outputs.tf**: Outputs key information such as VPC ID, subnet IDs, and ALB DNS name.

---

## Express.js API
The Node.js application is built with Express.js and includes:
- A `/health` endpoint for health checks.
- Modular and scalable architecture with routes, controllers, and middleware.

---

## Application Load Balancer
The ALB:
- Distributes traffic to the EC2 instance.
- Monitors the `/health` endpoint for health checks.
- Ensures high availability and fault tolerance.

---

## EC2 Deployment
The EC2 instance:
- Runs an Ubuntu image.
- Automatically installs Node.js, npm, and git using a `user_data` script.
- Clones the application repository, installs dependencies, and starts the Express.js app on port 80.

---

## Health Check Endpoint
The `/health` endpoint:
- Returns a `200 OK` status if the application is running.
- Used by the ALB to monitor the health of the EC2 instance.

---

## GitHub Actions CI
The CI pipeline:
- Triggers on `push` and `pull_request` events.
- Runs on `ubuntu-latest`.
- Installs Node.js 18, installs dependencies, and runs tests.
- Reports success or failure in GitHub Actions.

---

## k6 Load Testing
The k6 load test script:
- Tests the `/health` endpoint.
- Simulates 20 virtual users for 30 seconds.
- Validates that the status code is `200` and response time is below 500ms.
- Includes thresholds to ensure performance standards.

---

## Setup Instructions
### Prerequisites
- AWS account with necessary permissions.
- Terraform installed locally.
- Node.js and npm installed locally.
- k6 installed for load testing.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ralex33/EF-Evaluaci-n-Final.git
   cd EF-Evaluaci-n-Final
   ```

2. **Set Up Terraform**:
   ```bash
   cd terraform
   terraform init
   terraform apply
   ```

3. **Deploy the Application**:
   - Terraform will provision the infrastructure and deploy the application automatically.

4. **Run Load Tests**:
   ```bash
   k6 run tests/health-load-test.js
   ```

---

## AWS Services Used
- **VPC**: For network isolation.
- **EC2**: To host the Node.js application.
- **Application Load Balancer**: For traffic distribution and health checks.
- **Internet Gateway**: For internet access.
- **Security Groups**: For traffic control.

---

This project demonstrates best practices for AWS DevOps, including infrastructure as code, CI/CD, and performance testing.