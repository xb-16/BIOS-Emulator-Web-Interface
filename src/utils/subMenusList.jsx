let Main1SubMenuKeys = [
  "type:",
  "cylinders:",
  "heads:",
  "sectors/track:",
  "maximum capacity:",
  "__BR__",
  "landing zone:",
  "write precomp:",
  "__BR__",
  "multi sector transfer:",
  "LBA mode control:",
  "32-bit IO:",
  "transfer mode:",
  "smart monitoring:",
];
let Main1SubMenuValues = [
  <div className="elm curly black">
    <span>1.44</span>
  </div>,
  <div className="elm curly black">
    <span>13328</span>
  </div>,
  <div className="elm curly black">
    <span>15</span>
  </div>,
  <div className="elm curly black">
    <span>63</span>
  </div>,
  "6449 MB",
  "__BR__",
  <div className="elm curly black">
    <span>762</span>
  </div>,
  <div className="elm curly black">
    <span>None</span>
  </div>,
  "__BR__",
  <div className="elm curly black">
    <span>16 Sectors</span>
  </div>,
  <div className="elm curly black">
    <span>Enabled</span>
  </div>,
  <div className="elm curly black">
    <span>Enabled</span>
  </div>,
  <div className="elm curly black">
    <span>fast PIO 4</span>
  </div>,
  <div className="elm curly black">
    <span>Enabled</span>
  </div>,
];
let Main1SubMenuDescriptions = [
  "Select the drive type of the fixed disk installed in your system. If type User is selected, Cylinders, Heads, and Sectors can be edited directly. Auto attempts to automatically detect the drive type for drives that comply with ANSI specifications.",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
// =====================================================================
let Main5SubMenuKeys = [
  "Numlock:",
  "Key Click:",
  "Keyboard auto-repeat rate:",
  "Keyboard auto-repeat delay:",
];
let Main5SubMenuValues = [
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>30/sec</span>
  </div>,
  <div className="elm curly black">
    <span>1/2 sec</span>
  </div>,
];
let Main5SubMenuDescriptions = [
  "Selects power-on state for Numlock key.",
  "",
  "",
  "",
];
// =====================================================================

let Advanced1SubMenuKeys = [
  "External cache:",
  "__BR__",
  "Cache Interleave:",
  "Cache Write Back:",
  "Cache Read Cycles:",
  "__BR__",
  "Cache System BIOS:",
  "Cache Video BIOS:",
  "Cache E800 - EFFF:",
  "Cache E000 - E7FF:",
  "Cache D800 - DFFF:",
  "Cache D000 - D7FF:",
  "Cache C800 - CFFF:",
  "Cache C800 - CFFF:",
  "__BR__",
  "Non-cacheable Regions:",
  "  Region 0, start:",
  "  Region 0, size:",
  "  Region 1, start:",
  "  Region 1, size:",
];
let Advanced1SubMenuValues = [
  <div className="elm curly black">
    <span>Enabled</span>
  </div>,
  "__BR__",
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>2T</span>
  </div>,
  "__BR__",
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Enabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  "__BR__",
  <div>&ensp;</div>,
  <div className="elm curly black">
    <span>0 kB</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>0 kB</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
];

let Advanced1SubMenuDescriptions = [
  "Sets the state of the external system memory cache. ",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
//==========================================================================

let Advanced2SubMenuKeys = [
  "Serial Port A:",
  "Base I/O address/IRQ:",
  "Serial Port B:",
  "Parallel Port:",
  "  Mode:",
  "  Base I/O address:",
  "  Interrupt:",
  "__BR__",
  "Diskette Controller:",
  "  Base I/O address:",
  "__BR__",
  "Legacy USB Support:",
];
let Advanced2SubMenuValues = [
  <div className="elm curly black">
    <span>Enabled</span>
  </div>,
  <div className="elm curly black">
    <span>3F8/IRQ4</span>
  </div>,
  <div className="elm curly black">
    <span>OS Controlled</span>
  </div>,
  <div className="elm curly black">
    <span>User</span>
  </div>,
  <div className="elm curly black">
    <span>Bi-directional</span>
  </div>,
  <div className="elm curly black">
    <span>378</span>
  </div>,
  <div className="elm curly black">
    <span>IRQ5</span>
  </div>,
  "__BR__",
  <div className="elm curly black">
    <span>Enabled</span>
  </div>,
  <div className="elm curly black">
    <span>Primary</span>
  </div>,
  "__BR__",
  <div className="elm curly black">
    <span>Enabled</span>
  </div>,
];
let Advanced2SubMenuDescriptions = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "Enable support for Legacy Universal Serial Bus",
];
// =======================================================================

let Advanced3SubMenuKeys = [
  "Hidden Refresh:",
  "Code Read Page Mode:",
  "Write Page Mode:",
  "CPU to PCI Write Buffers:",
  "PCI to DRAM Write Buffers:",
  "CPU to DRAM Write Buffers:",
  "Snoop Ahead:",
  "PCI Memory Burst Cycles:",
];
let Advanced3SubMenuValues = [
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
  <div className="elm curly black">
    <span>Disabled</span>
  </div>,
];
let Advanced3SubMenuDescriptions = [
  "",
  "",
  "",
  "Enables CPU to PCI write buffers, which allow data to be temporarily stored in buffers before writing the data.",
  "",
  "",
  "",
  "",
];
export {
  Main1SubMenuKeys,
  Main1SubMenuValues,
  Main1SubMenuDescriptions,
  Main5SubMenuKeys,
  Main5SubMenuValues,
  Main5SubMenuDescriptions,
  Advanced1SubMenuKeys,
  Advanced1SubMenuValues,
  Advanced1SubMenuDescriptions,
  Advanced2SubMenuKeys,
  Advanced2SubMenuValues,
  Advanced2SubMenuDescriptions,
  Advanced3SubMenuKeys,
  Advanced3SubMenuValues,
  Advanced3SubMenuDescriptions,
};
