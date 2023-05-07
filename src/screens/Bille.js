import React from 'react'

function Bille() {
  return (
    <div>
            <View style={styles.right} >
                    <View style={styles.rightTop} >
                        <View style={styles.rightTopright} >
                            <Text  >Trafi Normal</Text>
                            <Icon
                                type="material-community"
                                name="plus"
                                color={colors.primary2}
                                style={styles.image2}
                                size={15}
                            />
                        </View>

                        <View style={styles.rightTopright} >
                            <Text  >Sur place </Text>
                            <Icon
                                type="material-community"
                                name="plus"
                                color={colors.primary2}
                                style={styles.image2}
                                size={15}
                            />
                        </View>




                    </View>
                    <View style={styles.cardstcok} >
                        <Text style={styles.cardstcokText} >980 </Text>
                        <Icon
                            type="material-community"
                            name="plus"
                            color={colors.primary}
                            style={styles.image2}
                            size={35}
                        />
                    </View>
                    {/* ///container */}
                    <ScrollView>
                        <View style={styles.rightCenter} >

                            <View style={styles.rightCenterright} >
                                <Icon
                                    type="material-community"
                                    name="plus"
                                    color={colors.primary2}
                                    style={styles.image2}
                                    size={15}
                                />
                                <Text style={styles.rightCenteText} >appel noter  </Text>

                            </View>

                            <View style={styles.rightCenterright} >
                                <Icon
                                    type="material-community"
                                    name="plus"
                                    color={colors.primary2}
                                    style={styles.image2}
                                    size={15}
                                />
                                <Text style={styles.rightCenteText} >commentaire </Text>

                            </View>
                            <View style={styles.rightCenterright} >
                                <Icon
                                    type="material-community"
                                    name="plus"
                                    color={colors.primary2}
                                    style={styles.image2}
                                    size={15}
                                />
                                <Text style={styles.rightCenteText} >Action ticket </Text>

                            </View>
                            <View style={styles.rightCenterright} >
                                <Icon
                                    type="material-community"
                                    name="plus"
                                    color={colors.primary2}
                                    style={styles.image2}
                                    size={15}
                                />
                                <Text style={styles.rightCenteText} >Visualiser Reppel </Text>

                            </View>




                        </View>

                        <View style={styles.rightContainer}>

                            <View style={styles.rightContainercard}>

                                <Text style={styles.rightContainercardText} >Smasung A02 </Text>
                                <Text style={styles.rightContainercardText} >800 </Text>
                            </View>
                        </View>


                        <View style={styles.buttom}>
                            <View style={styles.buttomclick}>

                                <ButtonClick title="Tatal" />
                            </View>
                            <View style={styles.buttomclick}>

                            <ButtonClick title="Espace" />
                            </View>

                          

                        </View>

                    </ScrollView>

                </View>
    </div>
  )
}

export default Bille
