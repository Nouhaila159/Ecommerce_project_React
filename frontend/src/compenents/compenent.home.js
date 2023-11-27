import React, { useState } from "react";
import '../home.css'; // Assurez-vous d'ajuster le chemin en fonction de la structure de votre projet
import { Link } from "react-router-dom";

export function HomePage() {

  return (
       <div style={{ 
              width: '100%', 
              height: '100vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: '#ffff' 
            }}>
              <img
                src="https://sm.mashable.com/t/mashable_nl/photo/default/56894785694756384756984_t7p4.1248.jpg"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                alt="Electronic"
              />
            </div>
  );
}
