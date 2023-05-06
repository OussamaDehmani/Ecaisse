
import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

const Mention = () => {
  return (

         <ScrollView>
    <View style={styles.container}>
      <Text style={styles.body}>
        This app collects some personal data from users, such as name, email address, and usage data, which is used for the purpose of improving the app and providing a better user experience. We may also collect some non-personal information such as device information, browser type, and IP address. This data is used to monitor and analyze the usage of the app, and to improve its performance and functionality.
      </Text>
      <Text style={styles.title}>Titre 1</Text>
      <Text style={styles.body}>
        This app collects some personal data from users, such as name, email address, and usage data, which is used for the purpose of improving the app and providing a better user experience. We may also collect some non-personal information such as device information, browser type, and IP address. This data is used to monitor and analyze the usage of the app, and to improve its performance and functionality.
      </Text>
      <Text style={styles.title}>Titre 2</Text>
      <Text style={styles.body}>
        This app collects some personal data from users, such as name, email address, and usage data, which is used for the purpose of improving the app and providing a better user experience. We may also collect some non-personal information such as device information, browser type, and IP address. This data is used to monitor and analyze the usage of the app, and to improve its performance and functionality.
      </Text>
    </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
            paddingTop: Platform.OS === "ios" ? 60 : 80,

    flex: 1,
    padding: 20,
    paddingTop:10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
export default Mention;
