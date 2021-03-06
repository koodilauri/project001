
export const initialValues = {
  armorType: "Blademaster",
  setName: "",
  selectedWeapon: {
    equipment: {
      slots: 0,
      class: "General"
    }
  },
  selectedHead: {
    equipment: {
      slots: 0
    },
    decorations: [],
    usedSlots: 0
  },
  selectedTorso: {
    equipment: {
      slots: 0
    },
    decorations: [],
    usedSlots: 0
  },
  selectedArms: {
    equipment: {
      slots: 0
    },
    decorations: [],
    usedSlots: 0
  },
  selectedWaist: {
    equipment: {
      slots: 0
    },
    decorations: [],
    usedSlots: 0
  },
  selectedFeet: {
    equipment: {
      slots: 0
    },
    decorations: [],
    usedSlots: 0
  },
  selectedCharm: {
    equipment: {
      slots: 0,
      skill1: 149,
      amount1: 0,
      skill2: 149,
      amount2: 0
    },
    decorations: [],
    usedSlots: 0
  },
  heads: [],
  torsos: [],
  arms: [],
  waists: [],
  feet: []
}

export const validations = {
  type: "object",
  properties: {
    armorType: {
      type: "string",
      pattern: /^(Blademaster|Gunner)$/,
      error: "armor type is not Blademaster or Gunner"
    },
    setName: {
      type: "string",
      pattern: /^[a-z A-Z1-9']+$/,
      required: true,
      error: "Armorset can contain letters and numbers and must be at least 1 character long"
    },
    selectedWeapon: {
      type: "object",
      properties: {
        equipment: {
          type: "object",
          properties: {
            id: {
              type: "number",
              gt: 0,
              error: "You must select a weapon"
            }
          }
        }
      }
    },
    selectedHead: {
      type: "object",
      properties: {
        equipment: {
          type: "object",
          properties: {
            id: {
              type: "number",
              gt: 0,
              error: "You must select a head"
            }
          }
        }
      }
    },
    selectedTorso: {
      type: "object",
      properties: {
        equipment: {
          type: "object",
          properties: {
            id: {
              type: "number",
              gt: 0,
              error: "You must select a torso"
            }
          }
        }
      }
    },
    selectedArms: {
      type: "object",
      properties: {
        equipment: {
          type: "object",
          properties: {
            id: {
              type: "number",
              gt: 0,
              error: "You must select arms"
            }
          }
        }
      }
    },
    selectedWaist: {
      type: "object",
      properties: {
        equipment: {
          type: "object",
          properties: {
            id: {
              type: "number",
              gt: 0,
              error: "You must select a waist"
            }
          }
        }
      }
    },
    selectedFeet: {
      type: "object",
      properties: {
        equipment: {
          type: "object",
          properties: {
            id: {
              type: "number",
              gt: 0,
              error: "You must select feet"
            }
          }
        }
      }
    },
    selectedCharm: {
      type: "object",
      properties: {
        equipment: {
          type: "object"
        }
      }
    },
    heads: {
      type: Array,
      default: []
    },
    torsos: {
      type: Array,
      default: []
    },
    arms: {
      type: Array,
      default: []
    },
    waists: {
      type: Array,
      default: []
    },
    feet: {
      type: Array,
      default: []
    }
  }
}