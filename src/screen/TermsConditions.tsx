import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
const TermsConditions = () => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#4fa8b9'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>
          Acceptance of Terms and Conditions
        </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          By downloading, accessing, or using the Cricket Wicket app ("App"),
          you agree to comply with and be bound by these Terms and Conditions.
          If you do not agree with any part of these terms, you must not use the
          App
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Description of the App</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          Cricket Wicket is a mobile application focused on providing
          cricket-related content, including news, scores, player information,
          and other cricket-related updates. The app is provided to you free of
          charge, but it includes advertisements to support its maintenance and
          development.
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Advertisements*</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          The App contains third-party advertisements ("Ads") that may be
          displayed throughout the user interface. These Ads are intended to
          provide revenue to support the App's operations. You acknowledge and
          agree that Cricket Wicket shall not be responsible for the content of
          these Ads, their accuracy, or their relevance.
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Privacy</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          Your privacy is important to us. Please refer to our Privacy Policy
          [link to Privacy Policy] to understand how we collect, use, and
          disclose your personal information.
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Intellectual Property</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          All content, including text, graphics, images, and any other materials
          provided within the App, is owned by Cricket Wicket or its licensors
          and is protected by intellectual property laws. You may not use,
          reproduce, distribute, or modify any content without obtaining prior
          written permission from Cricket Wicket
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Limitation of Liability</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          Cricket Wicket shall not be liable for any direct, indirect,
          incidental, consequential, or punitive damages arising out of or in
          connection with the use of the App, including but not limited to
          errors, inaccuracies, interruptions, or loss of data
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Modification of Terms</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          Cricket Wicket reserves the right to modify these Terms and Conditions
          at any time. Your continued use of the App after any such
          modifications shall constitute your acceptance of the modified terms.
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Termination</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          Cricket Wicket reserves the right to suspend or terminate your access
          to the App at any time, without notice, for any reason, including
          violation of these Terms and Conditions.
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Governing Law</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of India. Any disputes arising out of or in
          connection with these terms shall be subject to the exclusive
          jurisdiction of the courts of India.
        </Text>
      </View>

      <View style={styles.viewStyle}>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          By using the Cricket Wicket App, you agree to abide by these Terms and
          Conditions. If you have any questions or concerns, please contact us
          at [contact email].
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',
            fontSize: 14,
          }}>
          [End of Terms and Conditions]
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  headingText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  texts: {
    fontSize: 18,
    color: '#fff',
  },
});
export default TermsConditions;
