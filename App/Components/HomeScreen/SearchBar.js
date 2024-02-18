import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FindAllCourses } from '../../Services';
import CourseItem from './CourseItem';
import SubHeading from '../SubHeading';

export default function SearchBar() {
   const navigation = useNavigation();
   const [filterData, setFilterData] = useState([]);
   const [courseList, setCouseList] = useState([]);
   const [searchCourse, setSearchCourse] = useState('');

   useEffect(() => {
      getCourses();
   }, []);

   const getCourses = () => {
      FindAllCourses()
         .then(res => {
            // console.log(`\nCourse List Response: ${res?.courses}`);
            setCouseList(res?.courses);
         }).catch((err) => {
            console.log(`Some Error to get all courses: ${err}`)
         })
   }
   // console.log(`courseList length: ${courseList.length}`);

   const searchCourseFilter = (text) => {
      if (text) {
         const newData = courseList.filter((item) => {
            const itemData = item.name ? item.name.toUpperCase()
               : "".toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
         });
         setFilterData(newData);
         setSearchCourse(text)
      } else {
         setFilterData([]);
         setSearchCourse(text)
      }
   }
   return (
      <View>
         <View style={{
            backgroundColor: Colors.white,
            paddingLeft: 15,
            borderRadius: 93,
            marginTop: 25,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
         }}>
            <FontAwesome5 name="search" size={35} color={Colors.black} />
            <TextInput placeholder=' Search Courses...' style={{
               fontSize: 29,
               fontFamily: 'sans-serif',
               width: '80%'
            }}
               value={searchCourse}
               underlineColorAndroid='transparent'
               onChangeText={(text) => searchCourseFilter(text)}
            />
         </View>
         <View style={{
            marginVertical: 10,
            zIndex: 50
         }}>
            {filterData.length > 0 ?
               <View>
                  <SubHeading text={"Search Results"} color={Colors.black} />
                  <FlatList
                     data={filterData}
                     key={filterData.id}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                     renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('course-detail', {
                           course: item
                        })}>
                           <CourseItem item={item} />
                        </TouchableOpacity>
                     )}
                  />
               </View> : null
            }
         </View>
      </View>
   )
}