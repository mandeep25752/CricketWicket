import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
const PrivacyPolicy = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#4fa8b9'}} showsVerticalScrollIndicator={false}>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Introduction</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
        
            color: '#fff',
            fontSize:14
          }}>
          Welcome to Cricket Wicket App! This Privacy Policy explains how we
          collect, use, and disclose your personal information when you use our
          mobile application ("App"). We are committed to safeguarding your
          privacy and ensuring that your personal information is protected.
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Information We Collect</Text>
        <Text style={{fontSize: 18, color: '#fff'}}>
          1.Personal Information :
        </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',

            color: '#fff',
            fontSize:14,
          }}>
          We may collect personal information such as your name, email address,
          and location when you register or interact with the App
        </Text>
        <Text style={{fontSize: 18, color: '#fff'}}>
          2. Device Information:
        </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
          
            color: '#fff',  fontSize:14
          }}>
          We may collect information about your device, including its unique
          device identifier, operating system, and mobile network information
        </Text>
        <Text style={{fontSize: 18, color: '#fff'}}>3. Usage Data :</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
           
            color: '#fff',  fontSize:14
          }}>
          We gather information on how you use the App, including the features
          you access, the content you view, and the interactions you have.
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}> How We Use Your Information</Text>
        <Text style={{fontSize: 18, color: '#fff'}}>1. Personalization : </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
          
            color: '#fff',  fontSize:14
          }}>
          We use your information to personalize your experience within the App,
          including showing you relevant content and advertisements.
        </Text>
        <Text style={{fontSize: 18, color: '#fff'}}>2. Communication : </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
    
            color: '#fff',  fontSize:14
          }}>
          We may send you updates, promotional offers, and important
          notifications related to the App and its services
        </Text>
        <Text style={{fontSize: 18, color: '#fff'}}>3. Analytics : </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
     
            color: '#fff',  fontSize:14
          }}>
          We analyze user behavior to improve our App's functionality, enhance
          user experience, and optimize our services.
        </Text>
        <Text style={{fontSize: 18, color: '#fff'}}>4. Advertising : </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
        
            color: '#fff',  fontSize:14
          }}>
          We may display third-party advertisements that are relevant to your
          interests based on the information collected
        </Text>
      </View>

      <View style={styles.viewStyle}>
        <Text style={styles.headingText}> Sharing Your Information :</Text>
        <Text style={{fontSize: 18, color: '#fff'}}>
          1.Third-Party Partners :
        </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
         
            color: '#fff',  fontSize:14
          }}>
          We may share non-personal, aggregated, or anonymized data with
          third-party partners for analytical and marketing purposes
        </Text>
        <Text style={{fontSize: 18, color: '#fff'}}>2. Advertisers : </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',  fontSize:14
          }}>
          We share non-personal information with advertisers to serve targeted
          ads within the App
        </Text>
        <Text style={{fontSize: 18, color: '#fff'}}>
          3. Legal Requirements :
        </Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
        
            color: '#fff',  fontSize:14
          }}>
          We may disclose your information if required by law or in response to
          legal requests.
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Data Security :</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
    
            color: '#fff',  fontSize:14
          }}>
          We implement security measures to protect your personal information
          from unauthorized access, disclosure, or alteration. However, no
          method of transmission over the internet or electronic storage is 100%
          secure
        </Text>
      </View>

      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Children's Privacy :</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',  fontSize:14
          }}>
          The App is not intended for children under the age of 13. We do not
          knowingly collect personal information from children. If you believe
          we have inadvertently collected such information, please contact us to
          remove it.
        </Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Your Choices :</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
            color: '#fff',  fontSize:14
          }}>
          You can control the collection and use of your personal information: -
          You can opt out of receiving promotional emails from us. - You can
          adjust your device settings to limit data sharing with us and
          third-party partners
        </Text>
      </View>

      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Changes to Privacy Policy :</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
      
            color: '#fff',
          }}>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any changes by updating the "Effective
          Date" at the beginning of the policy.
        </Text>
      </View>

      <View style={styles.viewStyle}>
        <Text style={styles.headingText}>Contact Us :</Text>
        <Text
          style={{
            alignItems: 'center',
            textAlign: 'justify',
        
            color: '#fff',  fontSize:14
          }}>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at [contact email]. By using the Cricket Wicket App,
          you agree to the terms outlined in this Privacy Policy. Please review
          this policy regularly to stay informed about how we handle your
          personal information.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical:5,
    paddingHorizontal: 10,
    width:'100%'
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
export default PrivacyPolicy;