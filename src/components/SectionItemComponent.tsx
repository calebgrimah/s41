import React from "react";
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import {ColorConstants, FontConstants, SizeConstants, Strings} from "../constants/AppConstants";
import {SectionItem} from "../@types";
import {Image} from "expo-image";
import AppButton from "./AppButton";


interface PosterDescriptionComponentProps {
    id: number;
    sectionTitle: string;
    sectionItems: Array<SectionItem>
}


const SectionItemComponent: React.FC<PosterDescriptionComponentProps> = ({sectionTitle, sectionItems, id}) => {
    return (
      <>
          <Text style={styles.premier}>
              {sectionTitle}
          </Text>
          <View>
              <ScrollView
                  horizontal={true} id={1123}
              >
                  {sectionItems.map((item, index) => {
                      return (
                          <View
                              // id={index}
                              style={styles.imageView}
                          >
                              <Image
                                  id={index}
                                  style={styles.image}
                                  source={item.image}
                                  contentFit="cover"
                                  transition={1000}
                              />
                              <Text style={styles.pilgrim}>{item.title}</Text>
                              <Text style={styles.pilgrimDescription}>{item.description}</Text>
                              <AppButton buttonText={Strings.ViewMore} onButtonClicked={() => {
                              }}/>
                          </View>
                      )
                  })}
              </ScrollView>
          </View>
      </>
    )
}


const styles = StyleSheet.create({
    premier: {
        fontSize: FontConstants.sizeHeader,
        fontFamily: FontConstants.familyBold,
        padding: SizeConstants.paddingLarge,
        color: ColorConstants.foreground,
    },
    pilgrim: {
        fontSize: FontConstants.sizeHeader,
        fontFamily: FontConstants.familySemiBold,
        marginTop: SizeConstants.paddingLarge,
        color: ColorConstants.foreground,
    },
    pilgrimDescription: {
        fontSize: FontConstants.sizeRegular,
        fontFamily: FontConstants.familyRegular,
        marginTop: SizeConstants.paddingLarge,
        marginBottom: SizeConstants.paddingLarge,
        color: ColorConstants.foreground,

    },
    imageView: {
        width: Dimensions.get('window').width / 2,
        justifyContent: 'flex-start',
        paddingLeft: SizeConstants.paddingLarge,
        paddingTop: SizeConstants.paddingRegular,
        marginBottom: SizeConstants.paddingLarge
    },
    image: {
        height: Dimensions.get('window').width / 2
    }

});
export default SectionItemComponent;
