pragma solidity 0.8.19;

import "./CrossChainNameServiceRegister.sol";
import "./CrossChainNameServiceLookup.sol";
contract ChainManager {
    CrossChainNameServiceRegister public ccnServiceRegister;
    CrossChainNameServiceLookup public lookupContract;
    constructor(address _ccnServiceRegister, address _lookupAddress) { 
        ccnServiceRegister = CrossChainNameServiceRegister(payable(_ccnServiceRegister));
         lookupContract = CrossChainNameServiceLookup(_lookupAddress);
    }

 
    function addNewChain(uint64 chainSelector, address receiver, uint256 gasLimit) external {
        // Ensure this contract has the necessary permissions
        ccnServiceRegister.enableChain(chainSelector, receiver, gasLimit);
    }  
  
    function initializeServiceRegister(address crossChainServiceRegisterAddress) external {
        lookupContract.setCrossChainNameServiceAddress(crossChainServiceRegisterAddress);
    }
     function initializeServiceReciever(address crossChainServiceRecieverAddress) external {
        lookupContract.setCrossChainNameServiceAddress(crossChainServiceRecieverAddress);
    }
}
