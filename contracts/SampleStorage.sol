// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

contract SampleStorage {
	uint storedData;

	function set(uint x) public {
		storedData = x;
	}

	function get() public view returns (uint) {
		return storedData;
	}
}
