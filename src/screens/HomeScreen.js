import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
// import { Button } from 'react-native-elements';
import { connectStyle, Button, Text, Icon, Container, Content } from 'native-base';

class HomeScreen extends Component {
	render() {
		return (
			<Image
				style={{
					flex: 1,
					resizeMode: 'stretch'
				}}
				source={{ uri: 'https://images.pexels.com/photos/177567/pexels-photo-177567.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' }}
			>
				<Container>
					<Content>
						
							<Text>DOBROTA</Text>
							

								<Button
									block
									info
									onPress={() => this.props.navigation.navigate('AnimalListScreen')}>
									<Text>Animals List</Text>
								</Button>
								<Button
									block
									success
									onPress={() => this.props.navigation.navigate('CreateNewAnimalItemScreen')}>
									<Text>To place an ad</Text>
								</Button>
								<Button
									block
									danger
									iconLeft
									onPress={() => this.props.navigation.navigate('StuffScreen')}>
									<Icon name='cog' />
									<Text>DB manager</Text>
								</Button>
							
						
					</Content>
				</Container>
			</Image>
		)
	}
}

// const styles = StyleSheet.create({
// 	viewStyle: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	primaryText: {
// 		fontSize: 40,
// 		padding: 16,
// 		color: '#383838',
// 		fontWeight: '200',
// 		backgroundColor: 'rgba(0,0,0,0)',
// 	},
// 	smallText: {
// 		fontSize: 23,
// 		padding: 16,
// 		color: '#383838',
// 		fontWeight: '200',
// 	}
// });

export default HomeScreen
// export default connectStyle('yourTheme.HomeScreen', styles)(HomeScreen);