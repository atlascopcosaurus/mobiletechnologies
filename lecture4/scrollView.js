import { StyleSheet, Text, View, ScrollView } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.innerText}>
          Mobile technology is a type of technology in which a user utilizes a
          mobile phone to perform communications-related tasks, such as
          communicating with friends, relatives, and others. It is used to send
          data from one system to another. Portable two-way communications
          systems, computing devices, and accompanying networking equipment make
          up mobile technology. Mobile technology is largely employed in
          cellular communication systems and other related areas. It employs a
          network architecture that allows multiple transmitters to deliver data
          on a single channel at the same time. Because it reduces the potential
          of frequency interference from two or more sources, this platform
          allows multiple users to use single frequencies. The channel has
          evolved over time.This is fast expanding; its applications are getting
          increasingly broad over time, and it is gradually replacing other
          similar sources of communication on the market, such as post offices
          and landlines. Mobile technology has progressed from a simple phone
          and texting device to a multi-tasking system that can be used for GPS
          navigation, internet browsing, gaming, and instant messaging, among
          other things. With the rise, experts claim that the future of computer
          technology is dependent on wireless networking and mobile
          computing.Through tablets and small PCs, mobile technology is becoming
          increasingly popular. This smartphone system has since been improved
          to a big multitasking computer that can be used for GPS navigation,
          gaming, internet browsing, and instant messaging. Tablets and portable
          laptops have increased the adoption of mobile technology. The mobile
          networks that connect these devices are referred to as wireless
          systems. They allow speech, data, and (mobile) apps to be shared
          between mobile devices. 5G's performance goals are high data rates,
          reduced latency, energy savings, reduced costs, increased system
          capacity and largescale device connectivity. 5G is still a fairly new
          type of networking and is still being spread across nations. Moving
          forward, 5G is going to set the standard of cellular service around
          the whole globe. Corporations such as AT&T, Verizon, and T-Mobile are
          some of the notorious cellular companies that are rolling out 5G
          services across the US. 5G started being deployed at the beginning of
          2020 and has been growing ever since. According to the GSM
          association, by 2025, approximately 1.7 billion subscribers will have
          a subscription with 5G service.Fifth-generation wireless (5G) is the
          latest iteration of cellular technology. 5G was engineered to greatly
          increase the speed and bandwidth of wireless networks while also
          reducing latency when compared to previous wireless standards.5G is
          ideal for telecommunications, internet of things (IoT) and for private
          networks using private 5G. Cellular companies began deploying 5G
          networks in 2019 as the successor to fourthgeneration wireless
          (4G).With 5G, data transmitted over wireless broadband connections can
          travel at multigigabit speeds, with potential ideal peak download
          speeds as high as 20 gigabits per second (Gbps). These speeds exceed
          wireline network speeds and can offer latency of below 5 milliseconds
          (ms) or lower, which is useful for applications that require real-time
          feedback. 5G enables a sharp increase in the amount of data
          transmitted over wireless systems due to more available bandwidth and
          advanced antenna technology.Overall, 5G is expected to generate a
          variety of new applications, uses and business cases as the technology
          is rolled out.
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    textAlign: "justify",
    padding: 20,
  },
});
