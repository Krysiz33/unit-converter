import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Selection = () => {
    return (
          <Tabs>
            <TabList>
                <Tab>Kilometre &rarr; Mile (Oliwier)</Tab>
                <Tab>Degree &rarr; Grad (Krystian)</Tab>
                <Tab>PLN &rarr; EURO (Kuba)</Tab>
                <Tab>Litre &rarr; Galon (Wiktor)</Tab>
                <Tab>Newtons &rarr; Poundals (Igor)</Tab>
                <Tab>Pascal &rarr; Bar (Maks)</Tab>
                <Tab>Kg &rarr; Pound (Xawier)</Tab>
                <Tab>Fahreiheit &rarr; Celsius (Dominik)</Tab>
            </TabList>

            <input />

            <TabPanel>
            <h2>Any content 1</h2>
                {/* <OliComponent value={value} /> */}
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
                {/* <KryComponent value={value} /> */}
            </TabPanel>
            <TabPanel>
            <h2>Any content 3</h2>
                {/* <KubComponent value={value} /> */}
            </TabPanel>
            <TabPanel>
            <h2>Any content 4</h2>
                {/* <WikComponent value={value} /> */}
            </TabPanel>
            <TabPanel>
            <h2>Any content 5</h2>
                {/* <IgoComponent value={value} /> */}
            </TabPanel>
            <TabPanel>
            <h2>Any content 6</h2>
                {/* <MakComponent value={value} /> */}
            </TabPanel>
            <TabPanel>
            <h2>Any content 7</h2>
                {/* <XawComponent value={value} /> */}
            </TabPanel>
            <TabPanel>
            <h2>Any content 7</h2>
                {/* <DomComponent value={value} /> */}
            </TabPanel>
        </Tabs>
    )
} 

export default Selection