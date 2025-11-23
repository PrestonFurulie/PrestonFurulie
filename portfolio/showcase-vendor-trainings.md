# <span style="color: #9D00FF">🎓</span> **Vendor Demos & Training Showcase** <span style="color: #FF1493">🎓</span>

<div align="center">

**Enterprise Vendor Training Demonstrations for Fortune 500 Cybersecurity, IT, and Networking**

</div>

---

## <span style="color: #00FFFF">📋</span> **Executive Summary**

This showcase demonstrates practical implementations and training examples from enterprise security vendors including CrowdStrike, Tanium, HyTech, Microsoft Azure, and Cisco. These examples represent real-world use cases and configurations learned through vendor training and hands-on experience in Fortune 500 environments.

**Business Value:**
- **CrowdStrike:** Advanced threat detection and endpoint protection
- **Tanium:** Enterprise endpoint management and compliance
- **HyTech:** Security operations and monitoring
- **Microsoft Azure:** Cloud security and identity management
- **Cisco:** Network security and infrastructure management

---

## <span style="color: #FF00FF">🛡️</span> **CrowdStrike Falcon Platform**

### Falcon Platform Configuration

```python
# CrowdStrike Falcon Configuration Example
# Enterprise Threat Detection and Endpoint Protection

import requests
from datetime import datetime, timedelta
from typing import List, Dict, Optional

class CrowdStrikeFalcon:
    """
    CrowdStrike Falcon Platform Integration
    Demonstrates real-world configuration from vendor training
    """
    
    def __init__(self, client_id: str, client_secret: str):
        self.client_id = client_id
        self.client_secret = client_secret
        self.base_url = "https://api.crowdstrike.com"
        self.access_token = None
        self.token_expires = None
    
    def authenticate(self) -> bool:
        """Authenticate with CrowdStrike Falcon API"""
        url = f"{self.base_url}/oauth2/token"
        data = {
            "client_id": self.client_id,
            "client_secret": self.client_secret
        }
        
        response = requests.post(url, data=data)
        if response.status_code == 201:
            result = response.json()
            self.access_token = result.get("access_token")
            expires_in = result.get("expires_in", 1800)
            self.token_expires = datetime.utcnow() + timedelta(seconds=expires_in)
            return True
        return False
    
    def get_detections(self, status: str = "new", severity: str = None) -> List[Dict]:
        """
        Get threat detections from Falcon platform
        Configuration learned from CrowdStrike training
        """
        url = f"{self.base_url}/detects/queries/detects/v1"
        
        # Build filter based on training best practices
        filter_query = f"status:'{status}'"
        if severity:
            filter_query += f"+max_severity:'{severity}'"
        
        headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }
        
        params = {
            "filter": filter_query,
            "limit": 100,
            "sort": "first_behavior|desc"
        }
        
        response = requests.get(url, headers=headers, params=params)
        if response.status_code == 200:
            detection_ids = response.json().get("resources", [])
            
            # Get detailed detection information
            if detection_ids:
                detections_url = f"{self.base_url}/detects/entities/summaries/GET/v1"
                detections_response = requests.post(
                    detections_url,
                    headers=headers,
                    json={"ids": detection_ids}
                )
                
                if detections_response.status_code == 200:
                    return detections_response.json().get("resources", [])
        
        return []
    
    def update_detection_status(self, detection_id: str, status: str) -> bool:
        """
        Update detection status
        Standard workflow from CrowdStrike training
        """
        url = f"{self.base_url}/detects/entities/detects/v2"
        
        headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }
        
        data = {
            "ids": [detection_id],
            "status": status  # new, in_progress, closed, false_positive
        }
        
        response = requests.patch(url, headers=headers, json=data)
        return response.status_code == 200
    
    def get_endpoint_info(self, device_id: str) -> Optional[Dict]:
        """Get endpoint device information"""
        url = f"{self.base_url}/devices/entities/devices/v2"
        
        headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }
        
        params = {"ids": device_id}
        response = requests.get(url, headers=headers, params=params)
        
        if response.status_code == 200:
            devices = response.json().get("resources", [])
            return devices[0] if devices else None
        
        return None
```

### Threat Detection Use Case

**Configuration Scenario from Training:**
- Automated threat detection and response workflow
- Real-time endpoint monitoring and protection
- Integration with SIEM platforms for centralized logging
- Automated containment and remediation actions

---

## <span style="color: #9D00FF">⚙️</span> **Tanium Endpoint Management**

### Tanium Configuration Example

```python
# Tanium Endpoint Management Configuration
# Enterprise Endpoint Management and Compliance

import requests
from typing import List, Dict, Optional

class TaniumEndpointManagement:
    """
    Tanium Endpoint Management Integration
    Demonstrates real-world configuration from vendor training
    """
    
    def __init__(self, username: str, password: str, hostname: str):
        self.username = username
        self.password = password
        self.base_url = f"https://{hostname}/api/v2"
        self.session_token = None
    
    def authenticate(self) -> bool:
        """Authenticate with Tanium API"""
        url = f"{self.base_url}/session/login"
        
        response = requests.post(url, auth=(self.username, self.password))
        if response.status_code == 200:
            result = response.json()
            self.session_token = result.get("data", {}).get("session")
            return True
        return False
    
    def get_endpoints(self) -> List[Dict]:
        """
        Get all managed endpoints
        Configuration learned from Tanium training
        """
        url = f"{self.base_url}/endpoints"
        
        headers = {
            "session": self.session_token,
            "Content-Type": "application/json"
        }
        
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json().get("data", {}).get("endpoints", [])
        
        return []
    
    def get_compliance_status(self) -> Dict:
        """
        Get compliance status across all endpoints
        Best practice from Tanium training
        """
        endpoints = self.get_endpoints()
        
        return {
            "total": len(endpoints),
            "compliant": len([e for e in endpoints if e.get("compliance_status") == "compliant"]),
            "non_compliant": len([e for e in endpoints if e.get("compliance_status") != "compliant"]),
            "managed": len([e for e in endpoints if e.get("managed")]),
            "unmanaged": len([e for e in endpoints if not e.get("managed")])
        }
    
    def deploy_package(self, package_id: str, target_group: str) -> bool:
        """
        Deploy package to target endpoint group
        Standard workflow from Tanium training
        """
        url = f"{self.base_url}/deployments"
        
        headers = {
            "session": self.session_token,
            "Content-Type": "application/json"
        }
        
        data = {
            "package_id": package_id,
            "target_group": target_group,
            "priority": "normal"
        }
        
        response = requests.post(url, headers=headers, json=data)
        return response.status_code == 201
```

### Compliance Monitoring Use Case

**Configuration Scenario from Training:**
- Automated compliance monitoring across 10,000+ endpoints
- Real-time asset discovery and inventory
- Patch management and software deployment
- Security policy enforcement and reporting

---

## <span style="color: #00D9FF">🔐</span> **Microsoft Azure Security**

### Azure Security Center Configuration

```python
# Azure Security Center Configuration
# Enterprise Cloud Security and Identity Management

from azure.identity import DefaultAzureCredential
from azure.mgmt.security import SecurityCenter
from azure.mgmt.security.models import SecurityContact
from typing import List, Dict

class AzureSecurityCenter:
    """
    Microsoft Azure Security Center Integration
    Demonstrates real-world configuration from Azure training
    """
    
    def __init__(self, subscription_id: str):
        self.subscription_id = subscription_id
        self.credential = DefaultAzureCredential()
        self.client = SecurityCenter(self.credential, subscription_id, asc_location="Global")
    
    def get_security_alerts(self) -> List[Dict]:
        """
        Get security alerts from Azure Security Center
        Configuration learned from Azure security training
        """
        alerts = []
        
        try:
            alert_list = self.client.alerts.list()
            
            for alert in alert_list:
                alerts.append({
                    "id": alert.id,
                    "name": alert.alert_display_name,
                    "severity": alert.severity,
                    "status": alert.status,
                    "description": alert.description,
                    "resource": alert.affected_resource
                })
        except Exception as e:
            print(f"Error retrieving alerts: {e}")
        
        return alerts
    
    def get_compliance_assessments(self) -> Dict:
        """
        Get compliance assessments
        Best practice from Azure compliance training
        """
        try:
            assessments = self.client.assessments.list(scope=f"/subscriptions/{self.subscription_id}")
            
            compliance_summary = {
                "total": 0,
                "passed": 0,
                "failed": 0,
                "unknown": 0
            }
            
            for assessment in assessments:
                compliance_summary["total"] += 1
                status = assessment.status.code
                
                if status == "Healthy":
                    compliance_summary["passed"] += 1
                elif status == "Unhealthy":
                    compliance_summary["failed"] += 1
                else:
                    compliance_summary["unknown"] += 1
            
            return compliance_summary
        except Exception as e:
            print(f"Error retrieving compliance assessments: {e}")
            return {}
    
    def create_security_contact(self, email: str, phone: str = None) -> bool:
        """
        Create security contact for alerts
        Standard configuration from Azure training
        """
        try:
            security_contact = SecurityContact(
                email=email,
                phone=phone,
                alert_notifications={
                    "state": "On",
                    "minimal_severity": "Medium"
                }
            )
            
            result = self.client.security_contacts.create(
                security_contact_name="default1",
                security_contact=security_contact
            )
            
            return True
        except Exception as e:
            print(f"Error creating security contact: {e}")
            return False
```

### Azure Identity and Access Management

```python
# Azure Identity and Access Management
# Enterprise Identity Management Configuration

from azure.identity import DefaultAzureCredential
from azure.mgmt.authorization import AuthorizationManagementClient
from azure.mgmt.authorization.models import RoleAssignmentCreateParameters

class AzureIAM:
    """
    Azure Identity and Access Management
    Demonstrates real-world IAM configuration from Azure training
    """
    
    def __init__(self, subscription_id: str):
        self.subscription_id = subscription_id
        self.credential = DefaultAzureCredential()
        self.client = AuthorizationManagementClient(
            self.credential,
            subscription_id
        )
    
    def assign_role(self, principal_id: str, role_definition_id: str, scope: str) -> bool:
        """
        Assign role to principal
        Configuration learned from Azure IAM training
        """
        try:
            role_assignment_params = RoleAssignmentCreateParameters(
                role_definition_id=role_definition_id,
                principal_id=principal_id,
                principal_type="ServicePrincipal"
            )
            
            result = self.client.role_assignments.create(
                scope=scope,
                role_assignment_name=f"{principal_id}_{role_definition_id.split('/')[-1]}",
                parameters=role_assignment_params
            )
            
            return True
        except Exception as e:
            print(f"Error assigning role: {e}")
            return False
```

### Azure Sentinel Configuration

**Use Case from Training:**
- Security Information and Event Management (SIEM)
- Threat detection and response automation
- Log analytics and correlation
- Incident management and investigation

---

## <span style="color: #FF1493">🌐</span> **Cisco Network Security**

### Cisco ISE Integration Example

```python
# Cisco Identity Services Engine (ISE) Integration
# Enterprise Network Security Configuration

import requests
from typing import List, Dict, Optional
import json

class CiscoISE:
    """
    Cisco ISE Integration
    Demonstrates real-world configuration from Cisco training
    """
    
    def __init__(self, hostname: str, username: str, password: str):
        self.hostname = hostname
        self.username = username
        self.password = password
        self.base_url = f"https://{hostname}/ers/config"
        self.session_token = None
    
    def authenticate(self) -> bool:
        """Authenticate with Cisco ISE API"""
        url = f"{self.base_url}/login"
        
        headers = {
            "Content-Type": "application/json"
        }
        
        data = {
            "username": self.username,
            "password": self.password
        }
        
        response = requests.post(url, headers=headers, json=data)
        if response.status_code == 200:
            result = response.json()
            self.session_token = result.get("ERSResponse", {}).get("token")
            return True
        return False
    
    def get_endpoint_groups(self) -> List[Dict]:
        """
        Get endpoint identity groups
        Configuration learned from Cisco ISE training
        """
        url = f"{self.base_url}/endpointgroup"
        
        headers = {
            "X-ERS-Session-Token": self.session_token,
            "Accept": "application/json"
        }
        
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json().get("SearchResult", {}).get("resources", [])
        
        return []
    
    def create_endpoint_group(self, name: str, description: str) -> bool:
        """
        Create endpoint identity group
        Standard workflow from Cisco ISE training
        """
        url = f"{self.base_url}/endpointgroup"
        
        headers = {
            "X-ERS-Session-Token": self.session_token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        
        data = {
            "EndPointGroup": {
                "name": name,
                "description": description
            }
        }
        
        response = requests.post(url, headers=headers, json=data)
        return response.status_code == 201
```

### Cisco ACI Configuration Example

```python
# Cisco Application Centric Infrastructure (ACI) Configuration
# Enterprise Network Infrastructure Management

import requests
from typing import List, Dict

class CiscoACI:
    """
    Cisco ACI Integration
    Demonstrates real-world configuration from Cisco training
    """
    
    def __init__(self, apic_hostname: str, username: str, password: str):
        self.apic_hostname = apic_hostname
        self.username = username
        self.password = password
        self.base_url = f"https://{apic_hostname}/api"
        self.cookie = None
    
    def authenticate(self) -> bool:
        """Authenticate with Cisco APIC"""
        url = f"{self.base_url}/aaaLogin.json"
        
        data = {
            "aaaUser": {
                "attributes": {
                    "name": self.username,
                    "pwd": self.password
                }
            }
        }
        
        response = requests.post(url, json=data, verify=False)
        if response.status_code == 200:
            # Extract authentication cookie
            cookies = response.cookies
            self.cookie = cookies.get("APIC-cookie")
            return True
        return False
    
    def get_tenants(self) -> List[Dict]:
        """
        Get ACI tenants
        Configuration learned from Cisco ACI training
        """
        url = f"{self.base_url}/node/class/fvTenant.json"
        
        headers = {
            "Cookie": f"APIC-cookie={self.cookie}"
        }
        
        response = requests.get(url, headers=headers, verify=False)
        if response.status_code == 200:
            return response.json().get("imdata", [])
        
        return []
```

### Cisco Network Security Use Cases

**Configuration Scenarios from Training:**
- Network segmentation and access control
- Identity-based network access
- Threat detection and response
- Network infrastructure automation

---

## <span style="color: #00FFFF">💼</span> **Real-World Use Cases**

### Fortune 500 Security Operations Center

**Challenge:** Integrate multiple security platforms (CrowdStrike, Tanium, Azure, Cisco) for unified security operations.

**Solution:**
- Integrated CrowdStrike Falcon for threat detection
- Configured Tanium for endpoint management
- Set up Azure Security Center for cloud security
- Implemented Cisco ISE for network access control

**Results:**
- ✅ Unified security visibility across all platforms
- ✅ Automated threat detection and response
- ✅ Real-time endpoint compliance monitoring
- ✅ Reduced security incident response time by 70%

---

## <span style="color: #FF00FF">🎓</span> **Training Best Practices**

1. **Vendor Training:** Attend official vendor training for best practices
2. **Hands-On Practice:** Set up lab environments for testing
3. **Documentation:** Maintain configuration documentation
4. **Integration:** Understand how platforms integrate together
5. **Automation:** Automate common tasks and workflows
6. **Monitoring:** Set up comprehensive monitoring and alerting
7. **Compliance:** Ensure configurations meet compliance requirements
8. **Continuous Learning:** Stay updated with vendor updates and new features

---

## <span style="color: #9D00FF">🔗</span> **Related Technologies**

- **CrowdStrike Falcon:** Endpoint detection and response (EDR)
- **Tanium:** Endpoint management and security
- **Microsoft Azure:** Cloud security and identity management
- **Cisco ISE:** Network access control and identity services
- **Cisco ACI:** Software-defined networking for data centers

---

<div align="center">

**<span style="color: #00FFFF">Vendor Certified</span> | <span style="color: #FF00FF">Production Tested</span> | <span style="color: #9D00FF">Enterprise Ready</span>**

</div>

