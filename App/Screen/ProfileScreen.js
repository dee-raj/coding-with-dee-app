import { View, Text, Button, Image,TextInput, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useClerk, useUser } from '@clerk/clerk-expo';
import Colors from '../Utils/Colors';
import React, { useState, useEffect } from 'react';

// import * as ImagePicker from 'expo-image-picker';
const ProfilePicture = ({ imageUrl, onImageChange }) => {
  // Implement image upload logic using ImagePicker
  return (
    <TouchableOpacity onPress={onImageChange}>
      <Image source={{ uri: imageUrl }} style={styles.profImg} />
    </TouchableOpacity>
  );
};

const BioSection = ({ bio, onChangeBio  }) => {
  return (
    <View style={{ marginVertical: 10, display:'flex', flexDirection:'row'}}>
      <Text style={{ fontWeight: 'bold'}}>Bio:{bio}</Text>
    </View>
  );
};

// const PersonalInfoForm = ({ initialValues, onSubmit }) => {
//   const { values, handleChange, handleSubmit } = useState({
//     initialValues,
//     onSubmit,
//   });

//   return (
//     <View onSubmit={handleSubmit}>
//       <TextInput value={values.name} onChangeText={handleChange("name")} placeholder="Name" />
//       <TextInput value={values.email} onChangeText={handleChange("email")} placeholder="Email" />
//       {/* ...other fields */}
//       <Button title="Save Changes" onPress={handleSubmit} />
//     </View>
//   );
// };
const PersonalInfoField = ({ label, value, onChangeText}) =>{
  return (
    <View>
      <Text>Label: {label}</Text>
      <Text>value: {value}</Text>
      <Text>onChangeText: {onChangeText}</Text>
    </View>
  )
};

const ContactInfoSection = ({
  phone,
  website,
  setPhone,
  setWebsite,
  privacyEnabled,
  setPrivacyEnabled,
}) => {
  return (
    <View>
      <PersonalInfoField label="Phone Number (optional)" value={phone} onChangeText={setPhone} />
      <PersonalInfoField label="Website (optional)" value={website} onChangeText={setWebsite} />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
        <Switch value={privacyEnabled} onValueChange={setPrivacyEnabled} />
        <Text style={{ marginLeft: 10 }}>Share website publicly</Text>
      </View>
    </View>
  );
};

const PrivacySettings = ({ settings, onSettingChange }) => {
  // Render toggles or options for different privacy settings
  // Implement logic to update user settings
  return (
    <View style={{marginVertical:10}}>
      {/* Render privacy setting options based on your requirements */}
      <Text>Privacy logic will be here</Text>
    </View>
  );
};


const SecuritySettings = ({ changePassword, enableMFA }) => {
  // Implement logic for password change and MFA functions
  return (
    <View>
      <TouchableOpacity onPress={changePassword}>
        <Text>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={enableMFA}>
        <Text>Enable Multi-Factor Authentication</Text>
      </TouchableOpacity>
    </View>
  );
};

const ActionButtons = ({ editProfile, saveChanges, logout }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={editProfile}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={saveChanges}>
        <Text>Save Changes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};


export default function ProfileScreen() {
  const { isLoaded, user } = useUser();
  const { signOut } = useClerk();

  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [bio, setBio] = useState('hey, there!');
  // Fetch user data if needed
  const [userData, setUserData] = useState(null);

  useEffect(() => {
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to login screen or handle the signed-out state as needed
    } catch (error) {
      console.error("Error signing out:", error);
      // Handle potential errors, like network issues
    }
  };

  return isLoaded && (
    <View>
      <View style={{padding:20, backgroundColor:'#21fae0'}}>
        <View>
          <ProfilePicture imageUrl={user?.imageUrl} />
          {userData ? (
            <View>
              <PersonalInfoForm initialValues={userData} onSubmit={ActionButtons} />
            </View>
          ) : (
            <Text>Loading profile...</Text>
          )}
        </View>
      <View>
        <BioSection bio={bio}/>
        <ContactInfoSection />
        {/* <PersonalInfoForm /> */}
        <SecuritySettings/>
        <PrivacySettings/>
      </View>
      </View>
        <View>
          <TouchableOpacity onPress={handleSignOut} style={{
            backgroundColor:'gray', 
            padding:10, 
            margin:10,
          }}>
            <Text style={{color: Colors.white}}>Sign Out</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profImg: {
    width: 100, 
    height: 100, 
    borderRadius: 50 
  }
})