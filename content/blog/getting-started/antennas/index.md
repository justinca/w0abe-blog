---
title: Getting Started - Antennas [Draft]
date: "2022-01-23T19:46:37.121Z"
---

<!-- Getting Started Series                                   
:---------------------------------------
[Get On The Air](./get-on-the-air)
[Radios](./radios)
[Antennas](./antennas)
[Operating](./operating) -->

## Antennas Are Half Of The Equation
Antennas are a huge subject. Your transceiver won't work without one. This post isn't going to scratch the surface of amateur radio antennas but I hope it helps you to get on the air and get a sense for how large of a topic this is. I do believe you should build your first antenna. It forces you to learn much more than just buying something and hooking it up. No matter what path you chose you will need an antenna.

## SWR
You will no doubt encounter Standing Wave Ratio (SWR) values as you investigate antennas. SWR is the ratio of energy that is reflected back to your transceiver. In a perfect world an antennas SWR would be 1:1. Generally the value is expressed as only the second number. Values below 2 are preferred. High SWR values can damage your transceiver during transmission so make sure you understand what it is and how to measure it. Modern transceivers have built in SWR meters. My FT-891 needs to be set to 5 watts to measure SWR. If you turn your power down the chances of damaging your rig are greatly reduced.

### How To Measure SWR
Antenna analyzers measure SWR and can get expensive. When you are trying to build out your shack it can be a hard pill to swallow. You can rely on your transceiver, or ask your local club if they have one you can borrow. Some antenna tuners also have SWR meters. I would recommend using whatever is available and try to get by spending as little as possible so you can use the funds elsewhere.

[Rig Expert](https://www.dxengineering.com/search/brand/rigexpert?SortBy=Default&SortOrder=Ascending&keyword=rigexpert&kr=rigexpert) is a popular choice and [NanoVNA](https://www.amazon.com/%E3%80%90Upgraded%E3%80%91AURSINC-Analyzer-Measuring-Parameters-Standing/dp/B07Z5VY7B6/?_encoding=UTF8&pd_rd_w=hsEhU&pf_rd_p=29505bbf-38bd-47ef-8224-a5dd0cda2bae&pf_rd_r=3D63BW5WDY265FXJGR0V&pd_rd_r=d6f40eed-0d0e-4621-92e8-b979b0b8a087&pd_rd_wg=xCiCF&ref_=pd_gw_ci_mcx_mr_hp_atf_m) vector network analyzers can measure SWR and provide some eye candy. I have not invested in any type of analyzer yet and rely on my antenna tuner.
## Antenna Tuners
Antenna tuners are not necessary initially but are nice to have. You will probably end up owning one if you keep at it long enough. Antenna tuners don't actually tune your antenna they do match the impedance of the antenna to optimize performance. Tuners should be chosen based on how you plan to operate. For [POTA](https://parksontheair.com/) and mobile operation you should consider the portability and power needs of the tuner. 

## Building A Dipole
Why a dipole? Its cheap and easy, doesn't require a tuner or a [balun](https://en.wikipedia.org/wiki/Balun), and they are very effective. I followed the following video and modified it slightly to deal with the challenges I faced.

`youtube:https://www.youtube.com/embed/fY8XaxamIYU`

I chose to build a 20 meter dipole. The range of your dipole will be based on the length of the wire. There are plenty of online [dipole calculators](http://www.westmountainradio.com/antenna_calculator.php) to help you determine wire length. Make sure to target the phone portion of the band. The 20 meter band is incredibly popular and require s reasonably sized dipole. 20 meters is generally only available during the day.
### Challenges
- Soldering the SO239

![SMA Male to UHF SO-239 Female Connectors](./IMG_9306.png)
<span style="color:gray">*[SMA Male to UHF SO-239 Female Connectors](https://www.amazon.com/gp/product/B00COW5E3A/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)*</span>

If you want multiple bands you can build a [fan dipole](https://www.hamuniverse.com/multidipole.html). Fan dipoles don't require an antenna tuner, but based on the bands you choose you may need to get the dipole high into the air since frequencies lower that 20 meter will need long wire lengths to operate.

`youtube:https://www.youtube.com/embed/UAlPQbf0SV0`

Once your dipole is complete hang it as high as you can from a tree and test it out. If you measure less than desirable SWR trim the ends 1/4" inch at a time and try again. Be patient! Its easier to trim a little at a time that it is to add length back/

## Polarization

## Antenna Types
Dipoles are cheap and easy but they require some space to operate. If you are short on space there are other options.
- Vertical
- Loop



	- Order this part from amazon
	- Get these parts at home depot
- Directional vs omni-directional
- Single band
- Polarization
- Multi-band antennas
- Balanced vs. unbalanced
- Safety
	- Dont install where the antenna can fall into power lines
	- Properly ground your antenna
	- Dont climb towers without proper experience and safety equipment
