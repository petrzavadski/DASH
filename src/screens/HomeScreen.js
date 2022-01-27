import React, { useContext, useState, Component } from 'react';
import { Text, StyleSheet, FlatList, View, Image  } from 'react-native';
import {Context} from '../context/BlogContext';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Caption } from 'react-native-paper';




const HomeScreen = ({ navigation }) => {
   
const { state, getBlogPosts } = useContext(Context);



const [finish, setFinish]= useState('Загружаем последние данные с сервера...');

let timer = setInterval(() => getBlogPosts(
    
    
    
    setFinish((finish) => '')





), 20000)

 
    return (
       <>
    
    
    <Text style={styles.title}>{finish}</Text>
           
            <FlatList 
            data={state}
            keyExtractor={(blogPost) => blogPost.AG_SS_produced}
            renderItem={({item})=>{


const one = parseInt(item.AG_SS_produced) + parseInt(item.AG_LTCS_produced);
return   <View style={styles.row}>

<Text>Статистика контроля на дату: {item.date} </Text>

 <Grid>
 <Col size={20}>
 <Row style={styles.cell}>
         <Text style={{height:150, paddingTop:0}}></Text>  
   </Row>
    <Row style={styles.cell}>
         <Text style={{height:50, paddingBottom:0}}>Класс стали:</Text>  
   </Row>
   <Row style={styles.cell}>
   <Text style={{height:'100%', paddingTop:55}}>Подано на контроль:</Text>  
   </Row>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}>Проконтролировано:</Text>  
   </Row>

   
   <Col size={10}>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}>Забраковано:</Text>  
   </Row>

   <Row style={styles.cell}>
   <Col size={10}>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}></Text>  
   </Row>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}></Text>  
   </Row>
   </Col>
   <Col size={10}>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}>Из них ремонт:</Text>  
   </Row>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}>Из них вырез:</Text>  
   </Row>
   
   </Col>
   </Row>


   </Col>
   
   <Col size={10}>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}>Отставание общее:</Text>  
   </Row>

   <Row style={styles.cell}>
   <Col size={10}>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}></Text>  
   </Row>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}></Text>  
   </Row>
   </Col>
   <Col size={10}>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}>Из них РК:</Text>  
   </Row>
   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}>Из них УЗК:</Text>  
   </Row>
   
   </Col>
   </Row>


   </Col>

   <Row style={styles.cell}>
   <Text style={{height:40, paddingTop:5}}>В ремонте/на вырезе:</Text>  
   </Row>

   </Col> 
 <Col size={25}>
   <Row style={styles.cell}>

   <Text style={{height:'100%', paddingTop:0}}>Технологический трубопровод (AG)</Text>  
   </Row>
   <Row style={styles.cell}>

   <Col size={25}>
   <Row style={styles.cell}>
        <Text style={{height:'100%', padding:0}}>Общее количество</Text>  
   </Row> 
   <Row style={styles.cell}>
        <Text style={{height:70, paddingTop:10}}>{parseInt(item.AG_SS_produced) + parseInt(item.AG_LTCS_produced)} </Text>  
   </Row> 
   <Row style={styles.cell}>
        <Text style={{height:41, paddingTop:10}}>{parseInt(item.AG_SS_produced) + parseInt(item.AG_LTCS_produced) - (parseInt(item.AG_SS_rt) + parseInt(item.AG_SS_us) + parseInt(item.AG_LTCS_rt) + parseInt(item.AG_LTCS_us))} </Text>  
   </Row> 

   <Row style={styles.cell}>
        <Text style={{height:41, paddingTop:10}}>{parseInt(item.AG_SS_repaire) + parseInt(item.AG_LTCS_repaire) + parseInt(item.AG_SS_cut) + parseInt(item.AG_LTCS_cut)} </Text>  
   </Row> 

   <Row style={styles.cell}>
        <Text style={{height:41, paddingTop:10}}>{parseInt(item.AG_SS_repaire) + parseInt(item.AG_LTCS_repaire)} </Text>  
   </Row> 

   <Row style={styles.cell}>
        <Text style={{height:41, paddingTop:10}}>{parseInt(item.AG_SS_cut) + parseInt(item.AG_LTCS_cut)} </Text>  
   </Row> 

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_SS_rt) + parseInt(item.AG_SS_us) + parseInt(item.AG_LTCS_rt) + parseInt(item.AG_LTCS_us)}</Text>  
   </Row> 

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_SS_rt) + parseInt(item.AG_LTCS_rt)}</Text>  
   </Row> 

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_SS_us) + parseInt(item.AG_LTCS_us)}</Text>  
   </Row> 

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_SS_under) + parseInt(item.AG_LTCS_under)}</Text>  
   </Row> 

   </Col>
   <Col size={25}>
   <Row style={styles.cell}>
   <Text style={{height:'100%', paddingTop:25}}>SS</Text>  
   </Row> 
   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_SS_produced}</Text>  
   </Row> 

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_SS_produced) - (parseInt(item.AG_SS_rt) + parseInt(item.AG_SS_us))}</Text>  
   </Row> 

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_SS_repaire) + parseInt(item.AG_SS_cut)}</Text>  
   </Row> 

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_SS_repaire}</Text>  
   </Row>  

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_SS_cut}</Text>  
   </Row>  

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_SS_rt) + parseInt(item.AG_SS_us)}</Text>  
   </Row> 

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_SS_rt}</Text>  
   </Row>  

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_SS_us}</Text>  
   </Row>  

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_SS_under}</Text>  
   </Row>  

   </Col>
   <Col size={25}>
   <Row style={styles.cell}>
   <Text style={{height:'100%', paddingTop:25}} >LTCS</Text>  
   </Row>
   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_LTCS_produced}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_LTCS_produced) - (parseInt(item.AG_LTCS_rt) + parseInt(item.AG_LTCS_us))}</Text>  
   </Row>



   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_LTCS_repaire) + parseInt(item.AG_LTCS_cut)}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_LTCS_repaire}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_LTCS_cut}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{parseInt(item.AG_LTCS_rt) + parseInt(item.AG_LTCS_us)}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_LTCS_rt}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_LTCS_us}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text style={{height:25, paddingTop:5}}>{item.AG_LTCS_under}</Text>  
   </Row>

   </Col>
   </Row>
   </Col> 
   <Col size={10}>
   <Row style={styles.cell}>
   <Text style={{height:118, paddingTop:25}}>Инженерные сети (UG) </Text>  
   </Row>
   <Row style={styles.cell}>
   <Text style={{height:'100%', paddingTop:25}} >LTCS</Text>  
   </Row>
   <Row style={styles.cell}>
   <Text>{item.UG_LTCS_produced}</Text>  
   </Row>
   <Row style={styles.cell}>
   <Text>{parseInt(item.UG_LTCS_repaire) + parseInt(item.UG_LTCS_cut)}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text>{item.UG_LTCS_inspected}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text>{parseInt(item.UG_LTCS_repaire) + parseInt(item.UG_LTCS_cut)}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text>{item.UG_LTCS_repaire}</Text>  
   </Row>


   <Row style={styles.cell}>
   <Text>{item.UG_LTCS_cut}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text>{parseInt(item.UG_LTCS_rt) + parseInt(item.UG_LTCS_us)}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text>{item.UG_LTCS_rt}</Text>  
   </Row>

   
   <Row style={styles.cell}>
   <Text>{item.UG_LTCS_us}</Text>  
   </Row>

   <Row style={styles.cell}>
   <Text>{item.UG_LTCS_under}</Text>  
   </Row>

   </Col> 

 </Grid>



  <Caption>(c)2021 Petr Zavadski petrzavadski@gmail.com</Caption>
    </View>
 

            }}

            
            />



        </>
   
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 25
    },
    row:{
        width: "100%"
      
    },
    title:{
        fontSize: 18
    },
    icon:{
        fontSize: 32
    },
    titleDate:{
        fontWeight: 'bold',
      color: 'red'  
    },
rotated:{
    transform: 
    [
        { rotate: '90deg' }
    ], 
    height: 30,
    flexDirection: 'column-reverse',
    width:'100%',
    borderWidth: 1, 
    marginLeft: 20,   
    marginRight: 20, 
    marginTop: 40, 

    marginTop: 15,
},

container: {
    width: '100%',
    height: 300,
    padding: 16,
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

// }

export default HomeScreen;

