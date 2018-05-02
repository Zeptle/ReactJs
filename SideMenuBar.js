

import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import ReactTree from './React-Treebeard.js';
import './CSS/SideMenuBar.css';
import { ic_business } from 'react-icons-kit/md/ic_business';



const sampleJson = [
    {
           "name": "root",
           "toggled": true,
           "children": [
              {
                 "name": "parent",
                 "children": [
                    {
                       "name": "child1"
                    },
                    {
                       "name": "child2"
                    }
                 ]
              },
              {
                 "name": "parent",
                 "children": [
                    {
                       "name": "child1"
                    },
                    {
                       "name": "child2"
                    }
                 ]
              },
              {
                 "name": "parent",
                 "children": [
                    {
                       "name": "nested parent",
                       "children": [
                          {
                             "name": "nested child 1"
                          },
                          {
                             "name": "nested child 2"
                          }
                       ]
                    }
                 ]
              }
           ]
        }, {
            "name": "root2",
            "toggled": true,
            "children": [
               {
                  "name": "parent",
                  "children": [
                     {
                        "name": "child1"
                     },
                     {
                        "name": "child2"
                     }
                  ]
               },
               {
                  "name": "parent",
                  "children": [
                    {
                       "name": "nested parent",
                       "children": [
                        {
                            "name": "nested parent",
                            "children": [
                                {
                                    "name": "nested parent",
                                    "children": [
                                       {
                                          "name": "nested child 1"
                                       },
                                       {
                                          "name": "nested child 2"
                                       }
                                    ]
                                 }
                            ]
                         }
                       ]
                    }
                 ]
               },
               {
                  "name": "parent",
                  "children": [
                     {
                        "name": "nested parent",
                        "children": [
                           {
                              "name": "nested child 1"
                           },
                           {
                              "name": "nested child 2"
                           }
                        ]
                     }
                  ]
               }
            ]
         }
        
     
];


function DisplayNavText(props) {
    let jsonData = props.jsonData;

  return (<div>{
           jsonData.map((json, index) =>   <Nav key={index} id={json.name}><NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                                    <NavText >{json.name}</NavText>
                                    <Nav id={json.name}  class='black'>
                                    <NavText className='black'>
                                        <ReactTree key={index} data={json.children} />
                                    </NavText>
                                    </Nav>
                                    </Nav>
                        )
        }</div>);
}

    

export default class App  extends React.Component{
    render() {
        return (
            <div className='roundedCorners'>
            <div style={{background: 'rgb(33, 37, 43)', color: '#FFF', width: 220, marginLeft: '15px',marginTop: '15px','border-radius': '5px'}}> 
            <SideNav highlightColor='rgb(157, 165, 171)' highlightBgColor='rgb(33, 37, 43)'  > 
            <DisplayNavText  jsonData={sampleJson}/>      
              {/*} <Nav id='dashboard' >
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                    <NavText > Dashboard </NavText>
                    <Nav id='dashboard1' class='black'>
                              <NavText className='black'  ><ReactTree data={sampleJson} /></NavText>  
                    </Nav>
                </Nav>
                <Nav id='sales'>
                    <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                    <NavText> Sales </NavText>
        </Nav>*/}
            </SideNav>
        </div>
        </div>
        );
    }
}
