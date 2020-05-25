import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {ligarDesligar} from '../actions/action'


const Box = ({color, on, dispatch}) => {
    return (
      <View style={[styles.box, {backgroundColor: color}]}>
        {on ? <Text>Ligado</Text> : <Text>Desligado</Text>}
        <Button title="Ligar/Desligar" onPress={() => dispatch(ligarDesligar(!on))} />
        <Button title="Ligar/Desligar TODAS CAIXAS" onPress={() => dispatch(ligarDesligar(!on))} />
      </View>
    );
};

const mapStateToProps = (store) => {
  return{
  on: store.on
  } 
}

export default connect (mapStateToProps)(Box)

const styles = {
  box: {flex: 1},
}

