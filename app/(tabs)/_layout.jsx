import { Image, View, Text } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React from "react";

import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor= {color}
        className="w-6 h-6"
      />
      <Text
        className={`font-regular text-xs`}
        style={{ color: color }}
      >
        {name}
        </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#004D3D',
            tabBarStyle: {
                backgroundColor: "#D9D9D9",
                borderTopWidth: 1,
                height: 96,
              },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Beranda"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="userOrder"
          options={{
            title: "UserOrder",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.kategori}
                color={color}
                name="Pesanan"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="userMessages"
          options={{
            title: "UserMessages",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.notifikasi}
                color={color}
                name="Notifikasi"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="userFavorites"
          options={{
            title: "UserFavorites",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.heart}
                color={color}
                name="Favorit"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profileButton}
                color={color}
                name="Profil"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
