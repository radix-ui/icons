import * as React from 'react';
import { IconProps } from './types';

export const FontFamilyIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M2.5 4.5C2.5 3.09886 3.59886 2 5 2H5.00257H5.00515H5.00775H5.01037H5.01301H5.01566H5.01834H5.02103H5.02374H5.02647H5.02921H5.03197H5.03475H5.03755H5.04037H5.0432H5.04605H5.04892H5.0518H5.05471H5.05763H5.06057H5.06352H5.0665H5.06949H5.07249H5.07552H5.07856H5.08162H5.0847H5.08779H5.0909H5.09403H5.09717H5.10034H5.10352H5.10671H5.10993H5.11316H5.1164H5.11967H5.12295H5.12624H5.12956H5.13289H5.13624H5.1396H5.14298H5.14638H5.1498H5.15323H5.15667H5.16014H5.16362H5.16711H5.17063H5.17416H5.1777H5.18126H5.18484H5.18844H5.19205H5.19568H5.19932H5.20298H5.20665H5.21035H5.21405H5.21778H5.22152H5.22527H5.22904H5.23283H5.23664H5.24045H5.24429H5.24814H5.25201H5.25589H5.25979H5.2637H5.26763H5.27157H5.27553H5.27951H5.2835H5.28751H5.29153H5.29557H5.29962H5.30369H5.30777H5.31187H5.31599H5.32012H5.32426H5.32842H5.33259H5.33678H5.34099H5.34521H5.34945H5.3537H5.35796H5.36224H5.36654H5.37085H5.37517H5.37951H5.38386H5.38823H5.39262H5.39701H5.40143H5.40585H5.4103H5.41475H5.41922H5.42371H5.42821H5.43273H5.43725H5.4418H5.44636H5.45093H5.45551H5.46012H5.46473H5.46936H5.474H5.47866H5.48333H5.48802H5.49272H5.49743H5.50216H5.5069H5.51165H5.51642H5.52121H5.526H5.53081H5.53564H5.54048H5.54533H5.5502H5.55507H5.55997H5.56487H5.56979H5.57473H5.57968H5.58464H5.58961H5.5946H5.5996H5.60461H5.60964H5.61468H5.61974H5.6248H5.62988H5.63498H5.64008H5.6452H5.65034H5.65548H5.66064H5.66581H5.671H5.6762H5.68141H5.68663H5.69187H5.69712H5.70238H5.70765H5.71294H5.71824H5.72355H5.72888H5.73422H5.73957H5.74493H5.75031H5.75569H5.7611H5.76651H5.77193H5.77737H5.78282H5.78828H5.79376H5.79924H5.80474H5.81025H5.81578H5.82131H5.82686H5.83242H5.83799H5.84357H5.84917H5.85478H5.8604H5.86603H5.87167H5.87732H5.88299H5.88867H5.89436H5.90006H5.90577H5.9115H5.91724H5.92298H5.92874H5.93451H5.9403H5.94609H5.9519H5.95771H5.96354H5.96938H5.97523H5.98109H5.98696H5.99285H5.99874H6.00465H6.01057H6.0165H6.02244H6.02839H6.03435H6.04032H6.04631H6.0523H6.05831H6.06432H6.07035H6.07639H6.08244H6.0885H6.09457H6.10065H6.10674H6.11284H6.11895H6.12507H6.13121H6.13735H6.14351H6.14967H6.15585H6.16203H6.16823H6.17443H6.18065H6.18687H6.19311H6.19936H6.20562H6.21188H6.21816H6.22445H6.23074H6.23705H6.24337H6.2497H6.25603H6.26238H6.26874H6.2751H6.28148H6.28786H6.29426H6.30066H6.30708H6.3135H6.31994H6.32638H6.33284H6.3393H6.34577H6.35225H6.35874H6.36524H6.37175H6.37827H6.3848H6.39134H6.39788H6.40444H6.41101H6.41758H6.42416H6.43076H6.43736H6.44397H6.45059H6.45722H6.46385H6.4705H6.47715H6.48382H6.49049H6.49717H6.50386H6.51056H6.51727H6.52399H6.53071H6.53744H6.54419H6.55094H6.5577H6.56446H6.57124H6.57802H6.58482H6.59162H6.59843H6.60524H6.61207H6.61891H6.62575H6.6326H6.63946H6.64632H6.6532H6.66008H6.66697H6.67387H6.68078H6.68769H6.69461H6.70154H6.70848H6.71543H6.72238H6.72934H6.73631H6.74329H6.75028H6.75727H6.76427H6.77128H6.77829H6.78531H6.79234H6.79938H6.80642H6.81348H6.82054H6.8276H6.83468H6.84176H6.84885H6.85594H6.86304H6.87015H6.87727H6.8844H6.89153H6.89866H6.90581H6.91296H6.92012H6.92729H6.93446H6.94164H6.94883H6.95602H6.96322H6.97043H6.97764H6.98486H6.99208H6.99932H7.00656H7.0138H7.02106H7.02832H7.03558H7.04285H7.05013H7.05742H7.06471H7.072H7.07931H7.08662H7.09393H7.10126H7.10858H7.11592H7.12326H7.13061H7.13796H7.14532H7.15268H7.16005H7.16743H7.17481H7.1822H7.18959H7.19699H7.2044H7.21181H7.21922H7.22664H7.23407H7.24151H7.24895H7.25639H7.26384H7.2713H7.27876H7.28622H7.29369H7.30117H7.30865H7.31614H7.32363H7.33113H7.33863H7.34614H7.35366H7.36118H7.3687H7.37623H7.38376H7.3913H7.39884H7.40639H7.41395H7.4215H7.42907H7.43664H7.44421H7.45179H7.45937H7.46695H7.47455H7.48214H7.48974H7.49735H7.50496H7.51257H7.52019H7.52781H7.53544H7.54307H7.55071H7.55835H7.56599H7.57364H7.5813H7.58895H7.59662H7.60428H7.61195H7.61963H7.6273H7.63498H7.64267H7.65036H7.65805H7.66575H7.67345H7.68116H7.68887H7.69658H7.7043H7.71202H7.71974H7.72747H7.7352H7.74294H7.75068H7.75842H7.76616H7.77391H7.78166H7.78942H7.79718H7.80494H7.81271H7.82048H7.82825H7.83602H7.8438H7.85158H7.85937H7.86716H7.87495H7.88274H7.89054H7.89834H7.90614H7.91395H7.92176H7.92957H7.93739H7.9452H7.95302H7.96085H7.96867H7.9765H7.98433H7.99216H8H8.01237H8.02475H8.03714H8.04953H8.06193H8.07433H8.08674H8.09915H8.11157H8.124H8.13643H8.14886H8.1613H8.17375H8.1862H8.19865H8.21111H8.22357H8.23604H8.24851H8.26098H8.27346H8.28595H8.29843H8.31092H8.32342H8.33591H8.34841H8.36091H8.37342H8.38593H8.39844H8.41095H8.42347H8.43599H8.44851H8.46103H8.47355H8.48608H8.49861H8.51114H8.52367H8.5362H8.54873H8.56127H8.57381H8.58634H8.59888H8.61142H8.62396H8.63649H8.64903H8.66157H8.67411H8.68665H8.69919H8.71173H8.72427H8.73681H8.74934H8.76188H8.77441H8.78695H8.79948H8.81201H8.82454H8.83707H8.8496H8.86213H8.87465H8.88717H8.89969H8.91221H8.92472H8.93724H8.94975H8.96225H8.97476H8.98726H8.99976H9.01225H9.02475H9.03724H9.04972H9.0622H9.07468H9.08715H9.09962H9.11209H9.12455H9.13701H9.14946H9.16191H9.17435H9.18679H9.19922H9.21165H9.22407H9.23649H9.2489H9.26131H9.27371H9.28611H9.2985H9.31088H9.32326H9.33563H9.34799H9.36035H9.3727H9.38505H9.39738H9.40971H9.42204H9.43435H9.44666H9.45896H9.47126H9.48354H9.49582H9.50809H9.52036H9.53261H9.54486H9.55709H9.56932H9.58154H9.59375H9.60596H9.61815H9.63033H9.64251H9.65468H9.66683H9.67898H9.69112H9.70324H9.71536H9.72747H9.73956H9.75165H9.76373H9.77579H9.78785H9.79989H9.81192H9.82395H9.83596H9.84796H9.85994H9.87192H9.88388H9.89584H9.90778H9.91971H9.93163H9.94353H9.95542H9.9673H9.97917H9.99103H10.0029H10.0147H10.0265H10.0383H10.0501H10.0619H10.0736H10.0854H10.0971H10.1088H10.1206H10.1322H10.1439H10.1556H10.1672H10.1789H10.1905H10.2021H10.2137H10.2253H10.2368H10.2484H10.2599H10.2714H10.2829H10.2944H10.3059H10.3173H10.3287H10.3402H10.3516H10.363H10.3743H10.3857H10.397H10.4083H10.4196H10.4309H10.4422H10.4534H10.4647H10.4759H10.4871H10.4982H10.5094H10.5205H10.5317H10.5428H10.5539H10.5649H10.576H10.587H10.598H10.609H10.62H10.6309H10.6419H10.6528H10.6637H10.6745H10.6854H10.6962H10.707H10.7178H10.7286H10.7394H10.7501H10.7608H10.7715H10.7822H10.7928H10.8034H10.814H10.8246H10.8352H10.8457H10.8562H10.8667H10.8772H10.8877H10.8981H10.9085H10.9189H10.9292H10.9396H10.9499H10.9602H10.9704H10.9807H10.9909H11.0011H11.0113H11.0214H11.0316H11.0417H11.0517H11.0618H11.0718H11.0818H11.0918H11.1018H11.1117H11.1216H11.1315H11.1414H11.1512H11.161H11.1708H11.1805H11.1903H11.2H11.2096H11.2193H11.2289H11.2385H11.2481H11.2576H11.2671H11.2766H11.2861H11.2955H11.3049H11.3143H11.3237H11.333H11.3423H11.3516H11.3608H11.37H11.3792H11.3884H11.3975H11.4066H11.4157H11.4247H11.4337H11.4427H11.4517H11.4606H11.4695H11.4784H11.4872H11.496H11.5048H11.5135H11.5223H11.531H11.5396H11.5482H11.5568H11.5654H11.5739H11.5824H11.5909H11.5994H11.6078H11.6161H11.6245H11.6328H11.6411H11.6494H11.6576H11.6658H11.6739H11.682H11.6901H11.6982H11.7062H11.7142H11.7222H11.7301H11.738H11.7459H11.7537H11.7615H11.7692H11.777H11.7847H11.7923H11.7999H11.8075H11.8151H11.8226H11.8301H11.8375H11.845H11.8523H11.8597H11.867H11.8743H11.8815H11.8887H11.8959H11.903H11.9101H11.9172H11.9242H11.9312H11.9381H11.9451H11.9519H11.9588H11.9656H11.9724H11.9791H11.9858H11.9924H11.9991H12.0056H12.0122H12.0187H12.0251H12.0316H12.038H12.0443H12.0506H12.0569H12.0632H12.0693H12.0755H12.0816H12.0877H12.0938H12.0998H12.1057H12.1116H12.1175H12.1234H12.1292H12.1349H12.1407H12.1463H12.152H12.1576H12.1631H12.1687H12.1741H12.1796H12.185H12.1903H12.1956H12.2009H12.2062H12.2113H12.2165H12.2216H12.2267H12.2317H12.2367H12.2416H12.2465H12.2513H12.2561H12.2609H12.2656H12.2703H12.2749H12.2795H12.2841H12.2886H12.293H12.2975H12.3018H12.3062H12.3104H12.3147H12.3189H12.323H12.3271H12.3312H12.3352H12.3392H12.3431H12.347H12.3508H12.3546H12.3583H12.362H12.3657H12.3693H12.3729H12.3764H12.3798H12.3833H12.3866H12.39H12.3932H12.3965H12.3996H12.4028H12.4059H12.4089H12.4119H12.4149H12.4178H12.4206H12.4234H12.4262H12.4289H12.4315H12.4341H12.4367H12.4392H12.4417H12.4441H12.4465H12.4488H12.451H12.4532H12.4554H12.4575H12.4596H12.4616H12.4636H12.4655H12.4674H12.4692H12.4709H12.4727H12.4743H12.4759H12.4775H12.479H12.4805H12.4819H12.4832H12.4845H12.4858H12.487H12.4881H12.4892H12.4903H12.4913H12.4922H12.4931H12.4939H12.4947H12.4954H12.4961H12.4967H12.4973H12.4978H12.4983H12.4987H12.499H12.4993H12.4996H12.4998H12.4999H12.5L12.5 2.5L12.5 3H12.4999H12.4998H12.4996H12.4993H12.499H12.4987H12.4983H12.4978H12.4973H12.4967H12.4961H12.4954H12.4947H12.4939H12.4931H12.4922H12.4913H12.4903H12.4892H12.4881H12.487H12.4858H12.4845H12.4832H12.4819H12.4805H12.479H12.4775H12.4759H12.4743H12.4727H12.4709H12.4692H12.4674H12.4655H12.4636H12.4616H12.4596H12.4575H12.4554H12.4532H12.451H12.4488H12.4465H12.4441H12.4417H12.4392H12.4367H12.4341H12.4315H12.4289H12.4262H12.4234H12.4206H12.4178H12.4149H12.4119H12.4089H12.4059H12.4028H12.3996H12.3965H12.3932H12.39H12.3866H12.3833H12.3798H12.3764H12.3729H12.3693H12.3657H12.362H12.3583H12.3546H12.3508H12.347H12.3431H12.3392H12.3352H12.3312H12.3271H12.323H12.3189H12.3147H12.3104H12.3062H12.3018H12.2975H12.293H12.2886H12.2841H12.2795H12.2749H12.2703H12.2656H12.2609H12.2561H12.2513H12.2465H12.2416H12.2367H12.2317H12.2267H12.2216H12.2165H12.2113H12.2062H12.2009H12.1956H12.1903H12.185H12.1796H12.1741H12.1687H12.1631H12.1576H12.152H12.1463H12.1407H12.1349H12.1292H12.1234H12.1175H12.1116H12.1057H12.0998H12.0938H12.0877H12.0816H12.0755H12.0693H12.0632H12.0569H12.0506H12.0443H12.038H12.0316H12.0251H12.0187H12.0122H12.0056H11.9991H11.9924H11.9858H11.9791H11.9724H11.9656H11.9588H11.9519H11.9451H11.9381H11.9312H11.9242H11.9172H11.9101H11.903H11.8959H11.8887H11.8815H11.8743H11.867H11.8597H11.8523H11.845H11.8375H11.8301H11.8226H11.8151H11.8075H11.7999H11.7923H11.7847H11.777H11.7692H11.7615H11.7537H11.7459H11.738H11.7301H11.7222H11.7142H11.7062H11.6982H11.6901H11.682H11.6739H11.6658H11.6576H11.6494H11.6411H11.6328H11.6245H11.6161H11.6078H11.5994H11.5909H11.5824H11.5739H11.5654H11.5568H11.5482H11.5396H11.531H11.5223H11.5135H11.5048H11.496H11.4872H11.4784H11.4695H11.4606H11.4517H11.4427H11.4337H11.4247H11.4157H11.4066H11.3975H11.3884H11.3792H11.37H11.3608H11.3516H11.3423H11.333H11.3237H11.3143H11.3049H11.2955H11.2861H11.2766H11.2671H11.2576H11.2481H11.2385H11.2289H11.2193H11.2096H11.2H11.1903H11.1805H11.1708H11.161H11.1512H11.1414H11.1315H11.1216H11.1117H11.1018H11.0918H11.0818H11.0718H11.0618H11.0517H11.0417H11.0316H11.0214H11.0113H11.0011H10.9909H10.9807H10.9704H10.9602H10.9499H10.9396H10.9292H10.9189H10.9085H10.8981H10.8877H10.8772H10.8667H10.8562H10.8457H10.8352H10.8246H10.814H10.8034H10.7928H10.7822H10.7715H10.7608H10.7501H10.7394H10.7286H10.7178H10.707H10.6962H10.6854H10.6745H10.6637H10.6528H10.6419H10.6309H10.62H10.609H10.598H10.587H10.576H10.5649H10.5539H10.5428H10.5317H10.5205H10.5094H10.4982H10.4871H10.4759H10.4647H10.4534H10.4422H10.4309H10.4196H10.4083H10.397H10.3857H10.3743H10.363H10.3516H10.3402H10.3287H10.3173H10.3059H10.2944H10.2829H10.2714H10.2599H10.2484H10.2368H10.2253H10.2137H10.2021H10.1905H10.1789H10.1672H10.1556H10.1439H10.1322H10.1206H10.1088H10.0971H10.0854H10.0736H10.0619H10.0501H10.0383H10.0265H10.0147H10.0029H9.99103H9.97917H9.9673H9.95542H9.94353H9.93163H9.91971H9.90778H9.89584H9.88388H9.87192H9.85994H9.84796H9.83596H9.82395H9.81192H9.79989H9.78785H9.77579H9.76373H9.75165H9.73956H9.72747H9.71536H9.70324H9.69112H9.67898H9.66683H9.65468H9.64251H9.63033H9.61815H9.60596H9.59375H9.58154H9.56932H9.55709H9.54486H9.53261H9.52036H9.50809H9.49582H9.48354H9.47126H9.45896H9.44666H9.43435H9.42204H9.40971H9.39738H9.38505H9.3727H9.36035H9.34799H9.33563H9.32326H9.31088H9.2985H9.28611H9.27371H9.26131H9.2489H9.23649H9.22407H9.21165H9.19922H9.18679H9.17435H9.16191H9.14946H9.13701H9.12455H9.11209H9.09962H9.08715H9.07468H9.0622H9.04972H9.03724H9.02475H9.01225H8.99976H8.98726H8.97476H8.96225H8.94975H8.93724H8.92472H8.91221H8.89969H8.88717H8.87465H8.86213H8.8496H8.83707H8.82454H8.81201H8.79948H8.78695H8.77441H8.76188H8.74934H8.73681H8.72427H8.71173H8.69919H8.69251L8.66353 3.08625L8.4051 3.8546C8.18869 4.49754 7.89401 5.37199 7.58092 6.29796C7.5026 6.52958 7.42309 6.76454 7.34333 7H8.5C8.77614 7 9 7.22386 9 7.5C9 7.77614 8.77614 8 8.5 8H7.00409C6.56725 9.28544 6.16435 10.4613 5.95799 11.0386C5.63628 11.9386 5.20712 12.4857 4.66741 12.7779C4.16336 13.0507 3.64154 13.0503 3.28378 13.05L3.25 13.05C2.94624 13.05 2.7 12.8038 2.7 12.5C2.7 12.1962 2.94624 11.95 3.25 11.95C3.64182 11.95 3.90351 11.9406 4.14375 11.8105C4.36444 11.691 4.65532 11.4149 4.92218 10.6683C5.10695 10.1514 5.45376 9.14134 5.84221 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H6.18188C6.30128 6.64786 6.42133 6.29325 6.53887 5.94561C6.85176 5.02028 7.14627 4.14633 7.36257 3.50371L7.53199 3H7.52781H7.52019H7.51257H7.50496H7.49735H7.48974H7.48214H7.47455H7.46695H7.45937H7.45179H7.44421H7.43664H7.42907H7.4215H7.41395H7.40639H7.39884H7.3913H7.38376H7.37623H7.3687H7.36118H7.35366H7.34614H7.33863H7.33113H7.32363H7.31614H7.30865H7.30117H7.29369H7.28622H7.27876H7.2713H7.26384H7.25639H7.24895H7.24151H7.23407H7.22664H7.21922H7.21181H7.2044H7.19699H7.18959H7.1822H7.17481H7.16743H7.16005H7.15268H7.14532H7.13796H7.13061H7.12326H7.11592H7.10858H7.10126H7.09393H7.08662H7.07931H7.072H7.06471H7.05742H7.05013H7.04285H7.03558H7.02832H7.02106H7.0138H7.00656H6.99932H6.99208H6.98486H6.97764H6.97043H6.96322H6.95602H6.94883H6.94164H6.93446H6.92729H6.92012H6.91296H6.90581H6.89866H6.89153H6.8844H6.87727H6.87015H6.86304H6.85594H6.84885H6.84176H6.83468H6.8276H6.82054H6.81348H6.80642H6.79938H6.79234H6.78531H6.77829H6.77128H6.76427H6.75727H6.75028H6.74329H6.73631H6.72934H6.72238H6.71543H6.70848H6.70154H6.69461H6.68769H6.68078H6.67387H6.66697H6.66008H6.6532H6.64632H6.63946H6.6326H6.62575H6.61891H6.61207H6.60524H6.59843H6.59162H6.58482H6.57802H6.57124H6.56446H6.5577H6.55094H6.54419H6.53744H6.53071H6.52399H6.51727H6.51056H6.50386H6.49717H6.49049H6.48382H6.47715H6.4705H6.46385H6.45722H6.45059H6.44397H6.43736H6.43076H6.42416H6.41758H6.41101H6.40444H6.39788H6.39134H6.3848H6.37827H6.37175H6.36524H6.35874H6.35225H6.34577H6.3393H6.33284H6.32638H6.31994H6.3135H6.30708H6.30066H6.29426H6.28786H6.28148H6.2751H6.26874H6.26238H6.25603H6.2497H6.24337H6.23705H6.23074H6.22445H6.21816H6.21188H6.20562H6.19936H6.19311H6.18687H6.18065H6.17443H6.16823H6.16203H6.15585H6.14967H6.14351H6.13735H6.13121H6.12507H6.11895H6.11284H6.10674H6.10065H6.09457H6.0885H6.08244H6.07639H6.07035H6.06432H6.05831H6.0523H6.04631H6.04032H6.03435H6.02839H6.02244H6.0165H6.01057H6.00465H5.99874H5.99285H5.98696H5.98109H5.97523H5.96938H5.96354H5.95771H5.9519H5.94609H5.9403H5.93451H5.92874H5.92298H5.91724H5.9115H5.90577H5.90006H5.89436H5.88867H5.88299H5.87732H5.87167H5.86603H5.8604H5.85478H5.84917H5.84357H5.83799H5.83242H5.82686H5.82131H5.81578H5.81025H5.80474H5.79924H5.79376H5.78828H5.78282H5.77737H5.77193H5.76651H5.7611H5.75569H5.75031H5.74493H5.73957H5.73422H5.72888H5.72355H5.71824H5.71294H5.70765H5.70238H5.69712H5.69187H5.68663H5.68141H5.6762H5.671H5.66581H5.66064H5.65548H5.65034H5.6452H5.64008H5.63498H5.62988H5.6248H5.61974H5.61468H5.60964H5.60461H5.5996H5.5946H5.58961H5.58464H5.57968H5.57473H5.56979H5.56487H5.55997H5.55507H5.5502H5.54533H5.54048H5.53564H5.53081H5.526H5.52121H5.51642H5.51165H5.5069H5.50216H5.49743H5.49272H5.48802H5.48333H5.47866H5.474H5.46936H5.46473H5.46012H5.45551H5.45093H5.44636H5.4418H5.43725H5.43273H5.42821H5.42371H5.41922H5.41475H5.4103H5.40585H5.40143H5.39701H5.39262H5.38823H5.38386H5.37951H5.37517H5.37085H5.36654H5.36224H5.35796H5.3537H5.34945H5.34521H5.34099H5.33678H5.33259H5.32842H5.32426H5.32012H5.31599H5.31187H5.30777H5.30369H5.29962H5.29557H5.29153H5.28751H5.2835H5.27951H5.27553H5.27157H5.26763H5.2637H5.25979H5.25589H5.25201H5.24814H5.24429H5.24045H5.23664H5.23283H5.22904H5.22527H5.22152H5.21778H5.21405H5.21035H5.20665H5.20298H5.19932H5.19568H5.19205H5.18844H5.18484H5.18126H5.1777H5.17416H5.17063H5.16711H5.16362H5.16014H5.15667H5.15323H5.1498H5.14638H5.14298H5.1396H5.13624H5.13289H5.12956H5.12624H5.12295H5.11967H5.1164H5.11316H5.10993H5.10671H5.10352H5.10034H5.09717H5.09403H5.0909H5.08779H5.0847H5.08162H5.07856H5.07552H5.07249H5.06949H5.0665H5.06352H5.06057H5.05763H5.05471H5.0518H5.04892H5.04605H5.0432H5.04037H5.03755H5.03475H5.03197H5.02921H5.02647H5.02374H5.02103H5.01834H5.01566H5.01301H5.01037H5.00775H5.00515H5.00257H5C4.15114 3 3.5 3.65114 3.5 4.5C3.5 4.77614 3.27614 5 3 5C2.72386 5 2.5 4.77614 2.5 4.5ZM12.5 2.5V2C12.7761 2 13 2.22386 13 2.5C13 2.77614 12.7761 3 12.5 3V2.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default FontFamilyIcon;
