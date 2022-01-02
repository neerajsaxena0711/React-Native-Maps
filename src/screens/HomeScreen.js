import { Text, StyleSheet, View, Dimensions } from "react-native"
import React, { useState } from 'react';
import MapView, { Callout, Marker } from "react-native-maps";
import bookings from '../data/bookings.json';
import hosts from '../data/hosts.json'


const HomeScreen = () => {

    const [mapRef, updateMapRef] = useState(null);
    const [bookingList, setBookingList] = useState(bookings.poiList);
    const [hostList, setHostList] = useState(hosts.placemarks);

    const fitToCoordinates = () => {
        if (mapRef === null) {
            return;
        }
        mapRef
            .fitToCoordinates([{ latitude: bookingList[0].coordinate.latitude,   longitude: bookingList[0].coordinate.longitude}, { latitude: hostList[0].coordinates[0],   longitude: hostList[0].coordinates[1]}], {
                edgePadding: {
                    top: 50,
                    right: 50,
                    bottom: 50,
                    left: 50,
                  }});
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={(ref) => updateMapRef(ref)}
                style={styles.map}
                onMapReady={() => fitToCoordinates()}>
                {bookingList.map((data, index) => {
                    return (
                        <View key={index}>
                            <Marker
                                coordinate={{
                                    latitude: data.coordinate.latitude,
                                    longitude: data.coordinate.longitude
                                }}>
                                <Callout tooltip>
                                    <View>
                                        <View style={styles.bubble}>
                                            <Text style={styles.name}>
                                                {data.name}
                                            </Text>
                                            <Text style={styles.status}>status: {data.status}</Text>
                                        </View>
                                        <View style={styles.arrowBorder}></View>
                                        <View style={styles.arrow}></View>
                                    </View>
                                </Callout>
                            </Marker>
                        </View>
                    )
                })}
                {hostList.map((data, index) => {
                    return (
                        <View key={index}>
                            <Marker
                                pinColor="blue"
                                coordinate={{
                                    latitude: data.coordinates[0],
                                    longitude: data.coordinates[1]
                                }}>
                                <Callout tooltip>
                                    <View>
                                        <View style={styles.bubble}>
                                            <Text style={styles.name}>
                                                {data.hostName}
                                            </Text>
                                            <Text style={styles.address}>
                                                {data.address}
                                            </Text>
                                            <Text style={styles.property}>
                                                {data.property}
                                            </Text>
                                            <Text style={styles.status}>status: {data.status}</Text>
                                        </View>
                                        <View style={styles.arrowBorder}></View>
                                        <View style={styles.arrow}></View>
                                    </View>
                                </Callout>
                            </Marker>
                        </View>
                    )
                })}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5
    },
    name: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black'
    },
    address: {
        fontSize: 10,
        marginBottom: 5
    },
    property: {
        fontSize: 12,
        marginBottom: 5,
    },
    status: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: '800',
        color: 'black'
    }
});

export default HomeScreen;