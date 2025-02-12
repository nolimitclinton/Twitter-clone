import { useRouter } from 'expo-router';
import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SignInScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [step, setStep] = useState(1);  
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => step === 1 ? router.back() : setStep(1)} style={{ marginLeft: 8 }}>
          <Text style={{ fontSize: 16, color: 'black' }}>Cancel</Text>
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <Image 
          source={{ uri: 'https://about.x.com/content/dam/about-twitter/x/large-x-logo.png' }} 
          style={{ width: 30, height: 30, resizeMode: 'contain' }}
        />
      ),
    });
  }, [navigation, step]);

  const handleNext = () => {
    if (input.trim() !== '') {
      setStep(2); 
    } else {
      alert('Please enter your phone, email, or username!');
    }
  };

  const handleLogin = () => {
    if (password.trim() !== '') {
      router.push('/(tabs)');  
    } else {
      alert('Please enter your password!');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, justifyContent: 'flex-start' }}>
      {step === 1 ? (
        <>
          <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 40, marginBottom: 20 }}>
            To get started, first enter your phone, email, or @username
          </Text>
          <TextInput
            style={{
              height: 50, 
              borderBottomWidth: 1, 
              borderBottomColor: '#ccc', 
              fontSize: 18, 
              paddingHorizontal: 10
            }}
            placeholder="Phone, email, or username"
            placeholderTextColor="#999"
            value={input}
            onChangeText={setInput}
          />
          <View style={{ position: 'absolute', bottom: 50, left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: '#1DA1F2' }}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                paddingVertical: 10, 
                paddingHorizontal: 25, 
                borderRadius: 30, 
                backgroundColor: input ? '#1DA1F2' : '#ccc'
              }} 
              onPress={handleNext}
              disabled={!input}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Next</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 40, marginBottom: 10 }}>Enter your password</Text>
          <Text style={{ fontSize: 18, color: '#555', marginBottom: 20 }}>{input}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <TextInput
              style={{
                flex: 1, 
                height: 50, 
                fontSize: 18, 
                paddingHorizontal: 10
              }}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ padding: 10 }}>
              <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} color="#999" />
            </TouchableOpacity>
          </View>
        
          <View style={{ position: 'absolute', bottom: 50, left: 20, right: 20, alignItems: 'center' }}>
            <TouchableOpacity 
              style={{
                width: '100%', 
                paddingVertical: 15, 
                borderRadius: 30, 
                backgroundColor: password ? '#1DA1F2' : '#ccc', 
                alignItems: 'center'
              }} 
              onPress={handleLogin}
              disabled={!password}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default SignInScreen;