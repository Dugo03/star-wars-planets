import React, { Component } from 'react';
import { View, ImageBackground }  from 'react-native';
import { Font } from 'expo';
import { countPlanets, fetchPlanet } from '../../actions/planetActions';
import { getRandomInt } from '../../helpers/random';
import { Button, Text, Loading, Card } from '../../components';
import styles  from './styles';

export default class Planets extends Component{

  state = {
    planetCount: null,
    currentPlanetNumber: null,
    currentPlanet: null,
    ready: false,
    error: null,
  }

  componentDidMount() {
    this.startup();
  }

  startup = async () => {
    this.setState({ error: null, ready: false });
    try {
      await Font.loadAsync({
        'starJedi': require('../../../assets/Starjedi.ttf'),
        'newsGothic': require('../../../assets/NewsGothic.otf'),
      })
      const planetCount = await countPlanets();
      const currentPlanetNumber = getRandomInt(planetCount)
      const currentPlanet = await fetchPlanet(currentPlanetNumber);
      this.setState({ planetCount, currentPlanetNumber, currentPlanet, ready: true });
    } catch (error) {
      this.setState({ error, ready: true })
    }
  }

  getNextPlanet = async () => {
    this.setState({ error: null, ready: false });
    try {
      const currentPlanetNumber = getRandomInt(this.state.planetCount - 1, 1, this.state.currentPlanetNumber);
      const currentPlanet = await fetchPlanet(currentPlanetNumber);
      this.setState({currentPlanetNumber, currentPlanet, ready: true });
    } catch (error) {
      this.setState({ error, ready: true })
    }
  }

  renderBody = () => {
    if (!this.state.ready) {
      return (
        <View>
          <Loading />
        </View>
      )
    }

    if (this.state.error) {
      return (
        <View>
          <Card title='Error'>
            <Text>There was an error fetching the data. Try again later</Text>
            <Button
              title='Do. Or do not. There is no Try'
              onPress={this.startup}
            />
          </Card>
        </View>
      )
    }

    return (
      <View>
        <Card title={this.state.currentPlanet.name}>
          <Text>Population: {this.state.currentPlanet.population}</Text>
          <Text>Climate: {this.state.currentPlanet.climate}</Text>
          <Text>Terrain: {this.state.currentPlanet.terrain}</Text>
          <Text>Appeared in {this.state.currentPlanet.films.length} films</Text>
          <Button
            title='Next'
            onPress={this.getNextPlanet}
          />
        </Card>
      </View>
    );
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={require('../../../assets/stars.png')}>
        {this.renderBody()}
      </ImageBackground>
    )
  }

}
