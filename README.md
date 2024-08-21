# **Disaster Management Platform**

This project is a real-time disaster management platform designed to connect victims with volunteers during and after natural calamities. The platform leverages AI for problem categorization, severity scoring, and volunteer estimation while utilizing MQTT for low-latency communication in areas with limited connectivity.

## **Key Features**
- **AI-Driven Problem Analysis:** Automatically categorizes problems and predicts severity and volunteer needs based on historical data.
- **Proximity-Based Matching:** Identifies and notifies volunteers within a 5 km radius using MongoDB geospatial queries.
- **Real-Time Updates:** MQTT ensures low-bandwidth communication with real-time problem updates and alerts.
- **Custom Alerts and Filters:** Volunteers can set personalized alerts and filter problems by proximity, severity, and category.
- **Push Notifications:** Alerts sent to both active volunteers and those who haven’t engaged recently via Firebase.
- **Virtual Collaboration:** Victims and volunteers can communicate via integrated chat and navigate problem locations using Google Maps.
- **Team Collaboration and Leaderboards:** Volunteers can form teams or work individually while earning points and ranks on a gamified leaderboard.

## **Technology Stack**
- **Frontend:** React.js
- **Backend:** Node.js (Express.js)
- **Database:** MongoDB with GeoJSON indexing
- **AI/ML Models:** TensorFlow.js for problem classification and severity scoring
- **Real-Time Communication:** MQTT for topic-based updates and Firebase for push notifications
- **Geospatial Services:** Google Maps API

## **Project Overview**
This platform is built with modularity, scalability, and performance in mind, featuring a microservice architecture for easy scaling and fault tolerance. AI models provide intelligent insights for problem classification, severity scoring, and volunteer estimation, helping to ensure optimal resource allocation during disasters.

Volunteers can access a wide range of features, from setting custom alerts to filtering problem statements by severity and proximity. Victims benefit from intuitive problem posting, priority settings, and real-time communication with nearby volunteers.

The system is optimized to work efficiently even under constrained network conditions, ensuring continuous availability and prompt responses.

## **How to Contribute**
1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and commit them with descriptive messages.
3. Submit a pull request with a clear explanation of the changes.

## **License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## **Contact**
For questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
