import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const PP = () => {
  return(
    <View>
      <Image source={{ uri: 'https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/222973177_1230976270685671_8729971199006394226_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeGuBZowpF2xQfFxyaz_iZ56JtenyxXd_1Am16fLFd3_UKePraiEkoBMmcVowBH29VZQgKmUdtH4DDboxaV8FVAK&_nc_ohc=3L4g-ukcIxAAX-80Xba&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfABW6uKhRUVhbaYS7UwdgeaESXWMTdm8qA3vRKs8EVCYA&oe=64FBFFA0' }} style ={styles.pp} />
    </View>
  ) 
};
const Profile = () => {
  const fname = 'Chariz Mae'
  const lname = 'Baco'
  return(
    <View>
      <Text style ={styles.profile}>{fname} {lname}</Text>
    </View>
  )
};
const Course = props =>{
  return(
    <View>
      <Text style ={styles.course}>{props.like}</Text>
    </View>
  )
};
const Subject = props => {
  return(
    <View>
      <Text style={styles.sub} >{props.subcode}</Text>
    </View>
  )
};

const SubjectDesc = props => {
  return(
    <View>
      <Text style={styles.subdesc}>{props.subdesc}</Text>
    </View>
  )
};
const Units = props => {
  return(
    <View>
      <Text style={styles.units}>Units: {props.units}</Text>
    </View>
  )
};

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.head}>
        <PP/>
        <Profile/>
        <Course like = "Information Technology 3"/>
      </View>

      <Text style={styles.subtitle}>My Subjects</Text>  
      
      <View style={styles.sublist}>
        <Subject  subcode= 'ELEC 2'/>
          <View>
            <SubjectDesc subdesc= 'Web Development/Web Enterprise'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= 'ELEC 3'/>
          <View>
            <SubjectDesc subdesc= 'Mobile Application'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= 'IT 311'/>
          <View>
            <SubjectDesc subdesc= 'Software Engineering'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= 'IT 312'/>
          <View>
            <SubjectDesc subdesc= 'Web Development/Web Enterprise'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= 'IT 313'/>
          <View>
            <SubjectDesc subdesc= 'Quantitative Methods'/>
            <Units units='3'/>
          </View> 
      </View>
      <Text style={styles.clickhere}>Click here to see more</Text> 
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  head: {
    backgroundColor: '#000080',
    alignItems: 'left',
    justifyContent: 'center',
    height: 260,
    width: 350,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    marginTop:'40px',
    marginBottom:'30px',
    
  },
  pp: {
    marginLeft: '20px',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  profile:{
    color: '#fff',
    fontSize: '30px',
    marginLeft: '20px' 
  },
  course: {
    color: '#fff',
    marginLeft: '20px',
  },

  subtitle:{
    marginRight:'248px',
    fontSize: '20px',
    marginBottom:'5px'
  },
  sublist: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width: 350,
    backgroundColor: '#9370db',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom:'8px',
    marginTop:'8px',
  },

  sub:{
    fontSize: '22px', 
    padding:5,
    fontWeight:'bold',
    marginLeft:'20px'
  },
  subdesc:{
    marginLeft:'30px'
  },
  units:{
    marginLeft:'30px'
  },
  clickhere:{
    marginTop:'15px',
    marginLeft:'180px',
    fontSize: '16px',
    marginBottom:'40px',
    color:'#24469C'
  }
});
