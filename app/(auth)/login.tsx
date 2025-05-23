import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { Image } from 'expo-image';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // State variables for user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true); // Password visibility toggle

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#FFF' }}
      headerImage={
        <Image
          source={require('@/assets/images/cloudways-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      {/* App Title */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">CW-Tech-Track App</ThemedText>
      </ThemedView>

      {/* Login Form */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Please login with your CloudWays email address:
        </ThemedText>

        <View style={styles.inputContainer}>
          {/* Email Input */}
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
            style={styles.input}
          />

          {/* Password Input with Eye Icon */}
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureText}
              placeholderTextColor="#999"
              style={styles.passwordInput}
            />
            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={secureText ? 'eye-off' : 'eye'}
                size={24}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  reactLogo: {
    height: 120,
    width: 250,
    position: 'absolute',
    top: 80,
    left: 80,
  },
  inputContainer: {
    marginTop: 20,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 18,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    marginTop: 20,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 18,
    fontSize: 16,
    color: '#000',
  },
  eyeIcon: {
    paddingLeft: 8,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#ba0202',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
