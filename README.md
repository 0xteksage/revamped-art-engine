# revamped-art-engine

## Setup Instructions

### Prerequisites
- [Git](https://git-scm.com/)
- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) for Mac/Linux  
- [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows

---

### 1. Clone the Repository

```sh
git clone https://github.com/0xteksage/revamped-art-engine.git
cd revamped-art-engine
```

---

### 2. Install Node.js (Recommended: v20 LTS)

#### **Windows**
1. Download and install [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).
2. Open Command Prompt and run:
   ```sh
   nvm install 20
   nvm use 20
   node -v   # Should show v20.x.x
   ```

#### **Mac/Linux**
1. Install nvm:
   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```
2. Restart your terminal, then run:
   ```sh
   nvm install 20
   nvm use 20
   node -v   # Should show v20.x.x
   ```

---

### 3. Install Dependencies

```sh
npm install
```

---

### 4. Prepare Your Art Assets

Place all your art layers in the `layers/` directory. Each layer should be in its own subfolder with numbered files (e.g., `Background/1.png`, `Character/1.png`, etc.).

Example structure:
```
layers/
├── Background/
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
├── Character/
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
└── Accessory/
    ├── 1.png
    ├── 2.png
    └── 3.png
```

---

### 5. Flatten Your Layers (Required)

Before generating art, you must flatten your layer structure:

```sh
npm run flattener
```

**What does the flattener do?**
The flattener reorganizes and optimizes your layer files for the art generation process. It:
- Processes all images in the `layers/` directory
- Normalizes file naming conventions
- Prepares the layer hierarchy for efficient generation
- Creates the proper metadata structure for each layer

---

### 6. Configure Your Art Generation

Before running the art engine, configure the settings for your target blockchain:

- **EVM Chains (Ethereum, Polygon, etc.):** Edit `src/config.js`
- **Sei Chain:** Edit `src/seiConfig.js`
- **Solana Chain:** Edit `src/solConfig.js`

Update the configuration file with your desired settings such as:
- Collection size
- Image dimensions
- Layer weights and rarities
- Output directory
- Metadata format

---

### 7. Run the Art Engine

#### EVM-Compatible Art Generation
To generate art for EVM-compatible chains (like Ethereum, Polygon, etc.), use:
```sh
npm run generate
```

#### Sei Chain
- **AR Format:**
  ```sh
  npm run seiBuild:ar
  ```
- **NS Format:**
  ```sh
  npm run seiBuild:ns
  ```

#### Solana Chain
- **AR Format:**
  ```sh
  npm run solBuild:ar
  ```
- **NS Format:**
  ```sh
  npm run solBuild:ns
  ```

---

### 8. Additional Utility Functions (EVM Compatible Chain Only)

The art engine provides several utility functions to help manage your NFT collection:

#### Rarity Analysis
Generate a rarity table for your collection:
```sh
npm run rarity
```

#### Image Processing
Apply pixelation effects to your generated art:
```sh
npm run pixelate
```

#### Collection Management (Compatible to any chain)
Reset your generated collection (removes all generated images and metadata):
```sh
npm run reset
```

#### Preview Generation
Generate a preview image showing multiple NFTs from your collection:
```sh
npm run preview
```

Generate an animated GIF preview of your collection:
```sh
npm run preview:gif
```

#### Metadata Management
Update existing metadata files:
```sh
npm run meta:update
```

Generate metadata files for your collection:
```sh
npm run meta:generate
```

Reset all metadata files:
```sh
npm run meta:reset
```

#### Thirdweb Integration
Run the complete thirdweb preparation process:
```sh
npm run thirdweb
```

Prepare your collection for thirdweb deployment:
```sh
npm run thirdweb:prepare
```

Upload your collection to thirdweb:
```sh
npm run thirdweb:upload
```

Create batch upload for thirdweb:
```sh
npm run thirdweb:createbatch
```

---

### Troubleshooting

- If you encounter errors with the `canvas` package, make sure you are using Node.js v20 LTS.
- On Windows, you may need to install additional build tools:
  ```sh
  npm install --global windows-build-tools
  ```
- Always run `npm run flattener` before generating art if you've updated your layers.
- **Reminder:** If you want to update your layers, remove all existing layers from the `layers/` directory before adding new or updated ones and running `npm run flattener` again.
- Make sure to configure the appropriate config file in the `src/` directory before running the art engine.
- For more help, see the [canvas installation guide](https://www.npmjs.com/package/canvas#compiling)

---

### Special Thanks

Special thanks to [Waren Gonzaga](https://github.com/warengonzaga) for providing the [NFT Dummy Assets](https://github.com/warengonzaga/nft-dummy-assets) used for testing and development purposes.