
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "C", "C++", "C#", "Kotlin", "Java", "Matlab", "Embedded C"],
  },
  {
    category: "Mobile & UI Development",
    skills: [
      "Android (Jetpack Compose, XML UI, ExoPlayer)", "Kotlin", "Java", 
      "Flutter (basic)", "REST APIs", "MQTT", "BLE", "Firebase"
    ],
  },
  {
    category: "Embedded & IoT Systems",
    skills: [
      "ESP32", "Arduino", "Raspberry Pi", "STM32", "NodeMCU", "Nvidia Jetson Nano",
      "C/C++", "Python", "Embedded C", "IoT Cloud Integration", "Real-time sensor control",
      "LoRa", "WiFi", "Bluetooth", "KNX", "CAN", "GSM"
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "AWS EC2", "S3", "IAM", "Ansible", "Terraform", "GitHub Actions",
      "Docker", "CI/CD pipelines"
    ],
  },
  {
    category: "Computer Vision & ML",
    skills: [
      "OpenCV", "Numpy", "Scipy", "Scikit-learn", "Pandas", "Matplotlib", 
      "TensorFlow", "PyTorch"
    ],
  },
  {
    category: "Robotics & Automation",
    skills: [
      "ROS/ROS2", "Gazebo", "Rviz", "SLAM", "MoveIt", "EKF", "AMCL", 
      "Gmapping", "Lidar", "Sensor Fusion", "Autonomous Navigation",
      "Delta PLC Ladder", "SCADA", "LabVIEW", "Yaskawa Robotic Arm", "Kinova Robotic Arm"
    ],
  },
  {
    category: "Software Tools",
    skills: [
      "Excel", "SQL", "Unity 3D (VR/XR/MR)", "UiPath", "Automation Anywhere",
      "SolidWorks", "AutoCAD", "Fusion 360", "Pixhawk", "Ardupilot", "PX4",
      "3D Printing", "Laser Cutting", "Github", "ClickUP", "KiCAD", "Eagle", "Altium"
    ],
  },
  {
    category: "Operating Systems",
    skills: ["Windows", "Linux (Ubuntu)", "Mac"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="mt-10">
          <Tabs defaultValue={skillCategories[0].category}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category}
                  className="text-sm"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
