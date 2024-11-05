export const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'initialOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ERC721EnumerableForbiddenBatchMint',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ERC721IncorrectOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ERC721InsufficientApproval',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'approver',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidApprover',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidOperator',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidReceiver',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidSender',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ERC721NonexistentToken',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'ERC721OutOfBoundsIndex',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromTokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_toTokenId',
        type: 'uint256',
      },
    ],
    name: 'BatchMetadataUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'MetadataUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
    ],
    name: 'safeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const bytecode =
  '0x608060405234801561000f575f80fd5b506004361061012a575f3560e01c806370a08231116100ab578063b88d4fde1161006f578063b88d4fde14610340578063c87b56dd1461035c578063d204c45e1461038c578063e985e9c5146103a8578063f2fde38b146103d85761012a565b806370a08231146102ae578063715018a6146102de5780638da5cb5b146102e857806395d89b4114610306578063a22cb465146103245761012a565b806323b872dd116100f257806323b872dd146101e65780632f745c591461020257806342842e0e146102325780634f6ccce71461024e5780636352211e1461027e5761012a565b806301ffc9a71461012e57806306fdde031461015e578063081812fc1461017c578063095ea7b3146101ac57806318160ddd146101c8575b5f80fd5b61014860048036038101906101439190612029565b6103f4565b604051610155919061206e565b60405180910390f35b610166610405565b60405161017391906120f7565b60405180910390f35b6101966004803603810190610191919061214a565b610494565b6040516101a391906121b4565b60405180910390f35b6101c660048036038101906101c191906121f7565b6104af565b005b6101d06104c5565b6040516101dd9190612244565b60405180910390f35b61020060048036038101906101fb919061225d565b6104d1565b005b61021c600480360381019061021791906121f7565b6105d0565b6040516102299190612244565b60405180910390f35b61024c6004803603810190610247919061225d565b610674565b005b6102686004803603810190610263919061214a565b610693565b6040516102759190612244565b60405180910390f35b6102986004803603810190610293919061214a565b610705565b6040516102a591906121b4565b60405180910390f35b6102c860048036038101906102c391906122ad565b610716565b6040516102d59190612244565b60405180910390f35b6102e66107cc565b005b6102f06107df565b6040516102fd91906121b4565b60405180910390f35b61030e610807565b60405161031b91906120f7565b60405180910390f35b61033e60048036038101906103399190612302565b610897565b005b61035a6004803603810190610355919061246c565b6108ad565b005b6103766004803603810190610371919061214a565b6108ca565b60405161038391906120f7565b60405180910390f35b6103a660048036038101906103a1919061258a565b6108dc565b005b6103c260048036038101906103bd91906125e4565b610916565b6040516103cf919061206e565b60405180910390f35b6103f260048036038101906103ed91906122ad565b6109a4565b005b5f6103fe82610a28565b9050919050565b60605f80546104139061264f565b80601f016020809104026020016040519081016040528092919081815260200182805461043f9061264f565b801561048a5780601f106104615761010080835404028352916020019161048a565b820191905f5260205f20905b81548152906001019060200180831161046d57829003601f168201915b5050505050905090565b5f61049e82610a88565b506104a882610b0e565b9050919050565b6104c182826104bc610b47565b610b4e565b5050565b5f600880549050905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610541575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161053891906121b4565b60405180910390fd5b5f610554838361054f610b47565b610b60565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105ca578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016105c19392919061267f565b60405180910390fd5b50505050565b5f6105da83610716565b821061061f5782826040517fa57d13dc0000000000000000000000000000000000000000000000000000000081526004016106169291906126b4565b60405180910390fd5b60065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f2054905092915050565b61068e83838360405180602001604052805f8152506108ad565b505050565b5f61069c6104c5565b82106106e1575f826040517fa57d13dc0000000000000000000000000000000000000000000000000000000081526004016106d89291906126b4565b60405180910390fd5b600882815481106106f5576106f46126db565b5b905f5260205f2001549050919050565b5f61070f82610a88565b9050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610787575f6040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161077e91906121b4565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6107d4610b75565b6107dd5f610bfc565b565b5f600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546108169061264f565b80601f01602080910402602001604051908101604052809291908181526020018280546108429061264f565b801561088d5780601f106108645761010080835404028352916020019161088d565b820191905f5260205f20905b81548152906001019060200180831161087057829003601f168201915b5050505050905090565b6108a96108a2610b47565b8383610cbf565b5050565b6108b88484846104d1565b6108c484848484610e28565b50505050565b60606108d582610fda565b9050919050565b6108e4610b75565b5f600c5f8154809291906108f790612735565b91905055905061090783826110e5565b6109118183611102565b505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b6109ac610b75565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a1c575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a1391906121b4565b60405180910390fd5b610a2581610bfc565b50565b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a815750610a808261115c565b5b9050919050565b5f80610a93836111d5565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b0557826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610afc9190612244565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b610b5b838383600161120e565b505050565b5f610b6c8484846113cd565b90509392505050565b610b7d610b47565b73ffffffffffffffffffffffffffffffffffffffff16610b9b6107df565b73ffffffffffffffffffffffffffffffffffffffff1614610bfa57610bbe610b47565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610bf191906121b4565b60405180910390fd5b565b5f600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d2f57816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610d2691906121b4565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e1b919061206e565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115610fd4578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610e6b610b47565b8685856040518563ffffffff1660e01b8152600401610e8d94939291906127ce565b6020604051808303815f875af1925050508015610ec857506040513d601f19601f82011682018060405250810190610ec5919061282c565b60015b610f49573d805f8114610ef6576040519150601f19603f3d011682016040523d82523d5f602084013e610efb565b606091505b505f815103610f4157836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f3891906121b4565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610fd257836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610fc991906121b4565b60405180910390fd5b505b50505050565b6060610fe582610a88565b505f600a5f8481526020019081526020015f2080546110039061264f565b80601f016020809104026020016040519081016040528092919081815260200182805461102f9061264f565b801561107a5780601f106110515761010080835404028352916020019161107a565b820191905f5260205f20905b81548152906001019060200180831161105d57829003601f168201915b505050505090505f61108a6114e7565b90505f81510361109e5781925050506110e0565b5f825111156110d25780826040516020016110ba929190612891565b604051602081830303815290604052925050506110e0565b6110db846114fd565b925050505b919050565b6110fe828260405180602001604052805f815250611563565b5050565b80600a5f8481526020019081526020015f2090816111209190612a51565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516111509190612244565b60405180910390a15050565b5f7f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806111ce57506111cd8261157e565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061124657505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611378575f61125584610a88565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156112bf57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156112d257506112d08184610916565b155b1561131457826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161130b91906121b4565b60405180910390fd5b811561137657838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f806113da85858561165f565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361141d576114188461186a565b61145c565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461145b5761145a81856118ae565b5b5b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff160361149d5761149884611985565b6114dc565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114db576114da8585611a45565b5b5b809150509392505050565b606060405180602001604052805f815250905090565b606061150882610a88565b505f6115126114e7565b90505f8151116115305760405180602001604052805f81525061155b565b8061153a84611ac9565b60405160200161154b929190612891565b6040516020818303038152906040525b915050919050565b61156d8383611b93565b6115795f848484610e28565b505050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061164857507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611658575061165782611c86565b5b9050919050565b5f8061166a846111d5565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146116ab576116aa818486611cef565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611736576116ea5f855f8061120e565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146117b557600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b60088054905060095f8381526020019081526020015f2081905550600881908060018154018082558091505060019003905f5260205f20015f909190919091505550565b5f6118b883610716565b90505f60075f8481526020019081526020015f205490505f60065f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f209050828214611957575f815f8581526020019081526020015f2054905080825f8581526020019081526020015f20819055508260075f8381526020019081526020015f2081905550505b60075f8581526020019081526020015f205f9055805f8481526020019081526020015f205f90555050505050565b5f60016008805490506119989190612b20565b90505f60095f8481526020019081526020015f205490505f600883815481106119c4576119c36126db565b5b905f5260205f200154905080600883815481106119e4576119e36126db565b5b905f5260205f2001819055508160095f8381526020019081526020015f208190555060095f8581526020019081526020015f205f90556008805480611a2c57611a2b612b53565b5b600190038181905f5260205f20015f9055905550505050565b5f6001611a5184610716565b611a5b9190612b20565b90508160065f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f20819055508060075f8481526020019081526020015f2081905550505050565b60605f6001611ad784611db2565b0190505f8167ffffffffffffffff811115611af557611af4612348565b5b6040519080825280601f01601f191660200182016040528015611b275781602001600182028036833780820191505090505b5090505f82602001820190505b600115611b88578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611b7d57611b7c612b80565b5b0494505f8503611b34575b819350505050919050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611c03575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611bfa91906121b4565b60405180910390fd5b5f611c0f83835f610b60565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611c81575f6040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401611c7891906121b4565b60405180910390fd5b505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611cfa838383611f03565b611dad575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611d6e57806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611d659190612244565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611da49291906126b4565b60405180910390fd5b505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611e0e577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611e0457611e03612b80565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611e4b576d04ee2d6d415b85acef81000000008381611e4157611e40612b80565b5b0492506020810190505b662386f26fc100008310611e7a57662386f26fc100008381611e7057611e6f612b80565b5b0492506010810190505b6305f5e1008310611ea3576305f5e1008381611e9957611e98612b80565b5b0492506008810190505b6127108310611ec8576127108381611ebe57611ebd612b80565b5b0492506004810190505b60648310611eeb5760648381611ee157611ee0612b80565b5b0492506002810190505b600a8310611efa576001810190505b80915050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611fba57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611f7b5750611f7a8484610916565b5b80611fb957508273ffffffffffffffffffffffffffffffffffffffff16611fa183610b0e565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61200881611fd4565b8114612012575f80fd5b50565b5f8135905061202381611fff565b92915050565b5f6020828403121561203e5761203d611fcc565b5b5f61204b84828501612015565b91505092915050565b5f8115159050919050565b61206881612054565b82525050565b5f6020820190506120815f83018461205f565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6120c982612087565b6120d38185612091565b93506120e38185602086016120a1565b6120ec816120af565b840191505092915050565b5f6020820190508181035f83015261210f81846120bf565b905092915050565b5f819050919050565b61212981612117565b8114612133575f80fd5b50565b5f8135905061214481612120565b92915050565b5f6020828403121561215f5761215e611fcc565b5b5f61216c84828501612136565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61219e82612175565b9050919050565b6121ae81612194565b82525050565b5f6020820190506121c75f8301846121a5565b92915050565b6121d681612194565b81146121e0575f80fd5b50565b5f813590506121f1816121cd565b92915050565b5f806040838503121561220d5761220c611fcc565b5b5f61221a858286016121e3565b925050602061222b85828601612136565b9150509250929050565b61223e81612117565b82525050565b5f6020820190506122575f830184612235565b92915050565b5f805f6060848603121561227457612273611fcc565b5b5f612281868287016121e3565b9350506020612292868287016121e3565b92505060406122a386828701612136565b9150509250925092565b5f602082840312156122c2576122c1611fcc565b5b5f6122cf848285016121e3565b91505092915050565b6122e181612054565b81146122eb575f80fd5b50565b5f813590506122fc816122d8565b92915050565b5f806040838503121561231857612317611fcc565b5b5f612325858286016121e3565b9250506020612336858286016122ee565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61237e826120af565b810181811067ffffffffffffffff8211171561239d5761239c612348565b5b80604052505050565b5f6123af611fc3565b90506123bb8282612375565b919050565b5f67ffffffffffffffff8211156123da576123d9612348565b5b6123e3826120af565b9050602081019050919050565b828183375f83830152505050565b5f61241061240b846123c0565b6123a6565b90508281526020810184848401111561242c5761242b612344565b5b6124378482856123f0565b509392505050565b5f82601f83011261245357612452612340565b5b81356124638482602086016123fe565b91505092915050565b5f805f806080858703121561248457612483611fcc565b5b5f612491878288016121e3565b94505060206124a2878288016121e3565b93505060406124b387828801612136565b925050606085013567ffffffffffffffff8111156124d4576124d3611fd0565b5b6124e08782880161243f565b91505092959194509250565b5f67ffffffffffffffff82111561250657612505612348565b5b61250f826120af565b9050602081019050919050565b5f61252e612529846124ec565b6123a6565b90508281526020810184848401111561254a57612549612344565b5b6125558482856123f0565b509392505050565b5f82601f83011261257157612570612340565b5b813561258184826020860161251c565b91505092915050565b5f80604083850312156125a05761259f611fcc565b5b5f6125ad858286016121e3565b925050602083013567ffffffffffffffff8111156125ce576125cd611fd0565b5b6125da8582860161255d565b9150509250929050565b5f80604083850312156125fa576125f9611fcc565b5b5f612607858286016121e3565b9250506020612618858286016121e3565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061266657607f821691505b60208210810361267957612678612622565b5b50919050565b5f6060820190506126925f8301866121a5565b61269f6020830185612235565b6126ac60408301846121a5565b949350505050565b5f6040820190506126c75f8301856121a5565b6126d46020830184612235565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61273f82612117565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361277157612770612708565b5b600182019050919050565b5f81519050919050565b5f82825260208201905092915050565b5f6127a08261277c565b6127aa8185612786565b93506127ba8185602086016120a1565b6127c3816120af565b840191505092915050565b5f6080820190506127e15f8301876121a5565b6127ee60208301866121a5565b6127fb6040830185612235565b818103606083015261280d8184612796565b905095945050505050565b5f8151905061282681611fff565b92915050565b5f6020828403121561284157612840611fcc565b5b5f61284e84828501612818565b91505092915050565b5f81905092915050565b5f61286b82612087565b6128758185612857565b93506128858185602086016120a1565b80840191505092915050565b5f61289c8285612861565b91506128a88284612861565b91508190509392505050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026129107fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826128d5565b61291a86836128d5565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61295561295061294b84612117565b612932565b612117565b9050919050565b5f819050919050565b61296e8361293b565b61298261297a8261295c565b8484546128e1565b825550505050565b5f90565b61299661298a565b6129a1818484612965565b505050565b5b818110156129c4576129b95f8261298e565b6001810190506129a7565b5050565b601f821115612a09576129da816128b4565b6129e3846128c6565b810160208510156129f2578190505b612a066129fe856128c6565b8301826129a6565b50505b505050565b5f82821c905092915050565b5f612a295f1984600802612a0e565b1980831691505092915050565b5f612a418383612a1a565b9150826002028217905092915050565b612a5a82612087565b67ffffffffffffffff811115612a7357612a72612348565b5b612a7d825461264f565b612a888282856129c8565b5f60209050601f831160018114612ab9575f8415612aa7578287015190505b612ab18582612a36565b865550612b18565b601f198416612ac7866128b4565b5f5b82811015612aee57848901518255600182019150602085019450602081019050612ac9565b86831015612b0b5784890151612b07601f891682612a1a565b8355505b6001600288020188555050505b505050505050565b5f612b2a82612117565b9150612b3583612117565b9250828203905081811115612b4d57612b4c612708565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffdfea2646970667358221220ed119c8c25fd20af39d5f89a160cdeeca79dabe52e57ef83b7e5258057b4bd0b64736f6c634300081a0033';
