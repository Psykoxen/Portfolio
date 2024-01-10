<template>
  <div class="timeline-container">
    <svg
      class="timeline-exit"
      width="75"
      viewBox="0 0 1270 322"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="635" cy="161" r="161" fill="#E6BE21" />
      <circle cx="1109" cy="161" r="161" fill="#2FB449" />
      <circle cx="161" cy="161" r="161" fill="#E73130" />
    </svg>
    <h2>{{ $t("AboutTitleExperienceAndEducation") }}</h2>
    <ol class="timeline">
      <li class="timeline-item">
        <span class="timeline-item-icon | avatar-icon">
          <i class="avatar">
            <img src="../assets/image//me.jpg" />
          </i>
        </span>
        <div class="new-comment">
          <input
            type="text"
            :placeholder="$t('AboutTimelineNextChallenge')"
            disabled
          />
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.81009 18.2778C9.20895 18.2778 9.53229 18.6012 9.53229 19V22.03C9.53229 25.8612 12.6389 28.9678 16.4701 28.9678C20.3012 28.9678 23.4079 25.8612 23.4079 22.03V19C23.4079 18.6012 23.7312 18.2778 24.1301 18.2778C24.5289 18.2778 24.8523 18.6012 24.8523 19V22.03C24.8523 26.6589 21.0989 30.4122 16.4701 30.4122C11.8412 30.4122 8.08789 26.6589 8.08789 22.03V19C8.08789 18.6012 8.41123 18.2778 8.81009 18.2778Z"
              fill="currentColor"
            />
            <path
              d="M20.3102 4.90002H12.6302C9.05016 4.90002 6.16016 7.80003 6.16016 11.37V17.05H26.7902V11.37C26.7802 7.80003 23.8802 4.90002 20.3102 4.90002Z"
              fill="currentColor"
            />
            <path
              d="M18.0101 3H14.9401C13.1001 3 11.6001 4.49 11.6001 6.34V17.06H21.3401V6.34C21.3401 4.5 19.8501 3 18.0101 3Z"
              fill="currentColor"
            />
            <path
              d="M18.6803 9.4101H17.7103V8.44009C17.7103 7.76009 17.1603 7.21008 16.4803 7.21008C15.8003 7.21008 15.2503 7.76009 15.2503 8.44009V9.4101H14.2803C13.6003 9.4101 13.0503 9.96008 13.0503 10.6401C13.0503 11.3201 13.6003 11.8701 14.2803 11.8701H15.2503V12.8401C15.2503 13.5201 15.8003 14.0701 16.4803 14.0701C17.1603 14.0701 17.7103 13.5201 17.7103 12.8401V11.8701H18.6803C19.3603 11.8701 19.9103 11.3201 19.9103 10.6401C19.9103 9.97008 19.3603 9.4101 18.6803 9.4101Z"
              fill="#f4f6f8"
            />
            <path
              d="M26.84 16.0601H6.09C4.94 16.0601 4 17.0001 4 18.1501C4 19.3001 4.94 20.2401 6.09 20.2401H26.84C27.99 20.2401 28.93 19.3001 28.93 18.1501C28.93 16.9901 28 16.0601 26.84 16.0601Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/asj.svg" alt="ASJ" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineCertified") }}
            <a href="#">{{ $t("AboutStJeanSecourism") }}</a>
            {{ $t("AboutTimelineAt") }}
            <a href="#">{{ $t("AmbulanceSaintJohn") }}</a>
            {{ $t("AboutTimelineIn") }}

            <time datetime="22-12-2023"
              >{{ $t("MounthDecember") }}, 2023</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.09155 6.63659L9.78267 3.49965C11.2037 2.83345 12.7961 2.83345 14.2171 3.49965L20.9083 6.63664C22.3638 7.31899 22.3638 9.68105 20.9083 10.3634L14.2172 13.5003C12.7962 14.1665 11.2038 14.1665 9.78275 13.5003L4.99995 11.2581"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2.5 15V12.1376C2.5 10.8584 2.5 10.2188 2.83032 9.71781C3.16064 9.21687 3.74853 8.96492 4.92432 8.461L6 8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/ets.png" alt="ETS" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineStartedSchool") }}
            <a href="#">Baccalauréat Génie Logiciel</a>
            {{ $t("AboutTimelineAt") }}
            <a href="#">ETS Montréal</a>
            {{ $t("AboutTimelineIn") }}

            <time datetime="21-01-2021"
              >{{ $t("MounthSeptember") }}, 2023</time
            ></span
          >
        </div>
      </li>

      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
          </svg>
        </span>
        <div class="timeline-item-description">
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineMoved") }} Montréal
            {{ $t("AboutTimelineIn") }}
            <time datetime="21-01-2021"
              >{{ $t("MounthAugust") }}, 2023</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div class="timeline-item-wrapper">
          <div class="timeline-item-description">
            <i class="avatar | small">
              <img src="../assets/image/sdis.svg" />
            </i>
            <span
              ><a href="#">Antoine</a> {{ $t("AboutTimelineAsWorked")
              }}<a href="#">{{ $t("ExperienceLifeguardManager") }}</a
              >{{ $t("AboutTimelineAt") }}
              <a href="#">SDIS 34</a>
              {{ $t("AboutTimelineFrom") }}{{ $t("MounthJuly")
              }}{{ $t("AboutTimelineTo") }}{{ $t("MounthAugust") }}
              <time datetime="21-01-2021">, 2023</time></span
            >
          </div>
          <div class="comment">
            <p>
              {{ $t("ExperienceLifeguardManagerResume") }}
            </p>
          </div>
        </div>
      </li>

      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/anap.svg" alt="anap" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineEndingInternship") }}
            <a href="#">ANAP</a>
            {{ $t("AboutTimelineIn") }}

            <time datetime="21-01-2021"
              >{{ $t("MounthJune") }}, 2023</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.81009 18.2778C9.20895 18.2778 9.53229 18.6012 9.53229 19V22.03C9.53229 25.8612 12.6389 28.9678 16.4701 28.9678C20.3012 28.9678 23.4079 25.8612 23.4079 22.03V19C23.4079 18.6012 23.7312 18.2778 24.1301 18.2778C24.5289 18.2778 24.8523 18.6012 24.8523 19V22.03C24.8523 26.6589 21.0989 30.4122 16.4701 30.4122C11.8412 30.4122 8.08789 26.6589 8.08789 22.03V19C8.08789 18.6012 8.41123 18.2778 8.81009 18.2778Z"
              fill="currentColor"
            />
            <path
              d="M20.3102 4.90002H12.6302C9.05016 4.90002 6.16016 7.80003 6.16016 11.37V17.05H26.7902V11.37C26.7802 7.80003 23.8802 4.90002 20.3102 4.90002Z"
              fill="currentColor"
            />
            <path
              d="M18.0101 3H14.9401C13.1001 3 11.6001 4.49 11.6001 6.34V17.06H21.3401V6.34C21.3401 4.5 19.8501 3 18.0101 3Z"
              fill="currentColor"
            />
            <path
              d="M18.6803 9.4101H17.7103V8.44009C17.7103 7.76009 17.1603 7.21008 16.4803 7.21008C15.8003 7.21008 15.2503 7.76009 15.2503 8.44009V9.4101H14.2803C13.6003 9.4101 13.0503 9.96008 13.0503 10.6401C13.0503 11.3201 13.6003 11.8701 14.2803 11.8701H15.2503V12.8401C15.2503 13.5201 15.8003 14.0701 16.4803 14.0701C17.1603 14.0701 17.7103 13.5201 17.7103 12.8401V11.8701H18.6803C19.3603 11.8701 19.9103 11.3201 19.9103 10.6401C19.9103 9.97008 19.3603 9.4101 18.6803 9.4101Z"
              fill="#f4f6f8"
            />
            <path
              d="M26.84 16.0601H6.09C4.94 16.0601 4 17.0001 4 18.1501C4 19.3001 4.94 20.2401 6.09 20.2401H26.84C27.99 20.2401 28.93 19.3001 28.93 18.1501C28.93 16.9901 28 16.0601 26.84 16.0601Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/crf.svg" alt="crf" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineBecame") }}
            <a href="#">{{ $t("ExperienceDLUSAMS") }}</a>
            {{ $t("AboutTimelineInside") }}
            <a href="#">{{ $t("CompanyRedCross") }}</a>
            {{ $t("AboutTimelineIn") }}
            <time datetime="21-01-2021"
              >{{ $t("MounthJune") }}, 2023</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/anap.svg" alt="anap" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineStartedInternship") }}
            <a href="#">{{ $t("ExperienceFullStackDeveloper") }} Salesforce</a>
            {{ $t("AboutTimelineAt") }}<a href="#">ANAP</a>
            {{ $t("AboutTimelineIn") }}

            <time datetime="21-01-2021"
              >{{ $t("MounthApril") }}, 2023</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
          </svg>
        </span>
        <div class="timeline-item-description">
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineMoved") }} Paris
            {{ $t("AboutTimelineIn") }}
            <time datetime="21-01-2021"
              >{{ $t("MounthApril") }}, 2023</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.81009 18.2778C9.20895 18.2778 9.53229 18.6012 9.53229 19V22.03C9.53229 25.8612 12.6389 28.9678 16.4701 28.9678C20.3012 28.9678 23.4079 25.8612 23.4079 22.03V19C23.4079 18.6012 23.7312 18.2778 24.1301 18.2778C24.5289 18.2778 24.8523 18.6012 24.8523 19V22.03C24.8523 26.6589 21.0989 30.4122 16.4701 30.4122C11.8412 30.4122 8.08789 26.6589 8.08789 22.03V19C8.08789 18.6012 8.41123 18.2778 8.81009 18.2778Z"
              fill="currentColor"
            />
            <path
              d="M20.3102 4.90002H12.6302C9.05016 4.90002 6.16016 7.80003 6.16016 11.37V17.05H26.7902V11.37C26.7802 7.80003 23.8802 4.90002 20.3102 4.90002Z"
              fill="currentColor"
            />
            <path
              d="M18.0101 3H14.9401C13.1001 3 11.6001 4.49 11.6001 6.34V17.06H21.3401V6.34C21.3401 4.5 19.8501 3 18.0101 3Z"
              fill="currentColor"
            />
            <path
              d="M18.6803 9.4101H17.7103V8.44009C17.7103 7.76009 17.1603 7.21008 16.4803 7.21008C15.8003 7.21008 15.2503 7.76009 15.2503 8.44009V9.4101H14.2803C13.6003 9.4101 13.0503 9.96008 13.0503 10.6401C13.0503 11.3201 13.6003 11.8701 14.2803 11.8701H15.2503V12.8401C15.2503 13.5201 15.8003 14.0701 16.4803 14.0701C17.1603 14.0701 17.7103 13.5201 17.7103 12.8401V11.8701H18.6803C19.3603 11.8701 19.9103 11.3201 19.9103 10.6401C19.9103 9.97008 19.3603 9.4101 18.6803 9.4101Z"
              fill="#f4f6f8"
            />
            <path
              d="M26.84 16.0601H6.09C4.94 16.0601 4 17.0001 4 18.1501C4 19.3001 4.94 20.2401 6.09 20.2401H26.84C27.99 20.2401 28.93 19.3001 28.93 18.1501C28.93 16.9901 28 16.0601 26.84 16.0601Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/crf.svg" alt="crf" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineBecame") }}
            <a href="#">{{ $t("ExperienceCSTCOM") }}</a>
            {{ $t("AboutTimelineInside") }}
            <a href="#">{{ $t("CompanyRedCross") }}</a>
            {{ $t("AboutTimelineIn") }}
            <time datetime="21-01-2021"
              >{{ $t("MounthJanuary") }}, 2023</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.81009 18.2778C9.20895 18.2778 9.53229 18.6012 9.53229 19V22.03C9.53229 25.8612 12.6389 28.9678 16.4701 28.9678C20.3012 28.9678 23.4079 25.8612 23.4079 22.03V19C23.4079 18.6012 23.7312 18.2778 24.1301 18.2778C24.5289 18.2778 24.8523 18.6012 24.8523 19V22.03C24.8523 26.6589 21.0989 30.4122 16.4701 30.4122C11.8412 30.4122 8.08789 26.6589 8.08789 22.03V19C8.08789 18.6012 8.41123 18.2778 8.81009 18.2778Z"
              fill="currentColor"
            />
            <path
              d="M20.3102 4.90002H12.6302C9.05016 4.90002 6.16016 7.80003 6.16016 11.37V17.05H26.7902V11.37C26.7802 7.80003 23.8802 4.90002 20.3102 4.90002Z"
              fill="currentColor"
            />
            <path
              d="M18.0101 3H14.9401C13.1001 3 11.6001 4.49 11.6001 6.34V17.06H21.3401V6.34C21.3401 4.5 19.8501 3 18.0101 3Z"
              fill="currentColor"
            />
            <path
              d="M18.6803 9.4101H17.7103V8.44009C17.7103 7.76009 17.1603 7.21008 16.4803 7.21008C15.8003 7.21008 15.2503 7.76009 15.2503 8.44009V9.4101H14.2803C13.6003 9.4101 13.0503 9.96008 13.0503 10.6401C13.0503 11.3201 13.6003 11.8701 14.2803 11.8701H15.2503V12.8401C15.2503 13.5201 15.8003 14.0701 16.4803 14.0701C17.1603 14.0701 17.7103 13.5201 17.7103 12.8401V11.8701H18.6803C19.3603 11.8701 19.9103 11.3201 19.9103 10.6401C19.9103 9.97008 19.3603 9.4101 18.6803 9.4101Z"
              fill="#f4f6f8"
            />
            <path
              d="M26.84 16.0601H6.09C4.94 16.0601 4 17.0001 4 18.1501C4 19.3001 4.94 20.2401 6.09 20.2401H26.84C27.99 20.2401 28.93 19.3001 28.93 18.1501C28.93 16.9901 28 16.0601 26.84 16.0601Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/crf.svg" alt="crf" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineBecame") }}
            <a href="#">{{ $t("ExperienceCMMS") }}</a>
            {{ $t("AboutTimelineInside") }}
            <a href="#">{{ $t("CompanyRedCross") }}</a>
            {{ $t("AboutTimelineIn") }}
            <time datetime="21-01-2021"
              >{{ $t("MounthOctober") }}, 2022</time
            ></span
          >
        </div>
      </li>

      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/sdis.svg" alt="sdis" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineAsWorked")
            }}<a href="#">{{ $t("ExperienceLifeguardManager") }}</a
            >{{ $t("AboutTimelineAt") }}
            <a href="#">SDIS 34</a>
            {{ $t("AboutTimelineFrom") }}{{ $t("MounthJuly")
            }}{{ $t("AboutTimelineTo") }}{{ $t("MounthAugust") }}
            <time datetime="21-01-2021">, 2022</time></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.81009 18.2778C9.20895 18.2778 9.53229 18.6012 9.53229 19V22.03C9.53229 25.8612 12.6389 28.9678 16.4701 28.9678C20.3012 28.9678 23.4079 25.8612 23.4079 22.03V19C23.4079 18.6012 23.7312 18.2778 24.1301 18.2778C24.5289 18.2778 24.8523 18.6012 24.8523 19V22.03C24.8523 26.6589 21.0989 30.4122 16.4701 30.4122C11.8412 30.4122 8.08789 26.6589 8.08789 22.03V19C8.08789 18.6012 8.41123 18.2778 8.81009 18.2778Z"
              fill="currentColor"
            />
            <path
              d="M20.3102 4.90002H12.6302C9.05016 4.90002 6.16016 7.80003 6.16016 11.37V17.05H26.7902V11.37C26.7802 7.80003 23.8802 4.90002 20.3102 4.90002Z"
              fill="currentColor"
            />
            <path
              d="M18.0101 3H14.9401C13.1001 3 11.6001 4.49 11.6001 6.34V17.06H21.3401V6.34C21.3401 4.5 19.8501 3 18.0101 3Z"
              fill="currentColor"
            />
            <path
              d="M18.6803 9.4101H17.7103V8.44009C17.7103 7.76009 17.1603 7.21008 16.4803 7.21008C15.8003 7.21008 15.2503 7.76009 15.2503 8.44009V9.4101H14.2803C13.6003 9.4101 13.0503 9.96008 13.0503 10.6401C13.0503 11.3201 13.6003 11.8701 14.2803 11.8701H15.2503V12.8401C15.2503 13.5201 15.8003 14.0701 16.4803 14.0701C17.1603 14.0701 17.7103 13.5201 17.7103 12.8401V11.8701H18.6803C19.3603 11.8701 19.9103 11.3201 19.9103 10.6401C19.9103 9.97008 19.3603 9.4101 18.6803 9.4101Z"
              fill="#f4f6f8"
            />
            <path
              d="M26.84 16.0601H6.09C4.94 16.0601 4 17.0001 4 18.1501C4 19.3001 4.94 20.2401 6.09 20.2401H26.84C27.99 20.2401 28.93 19.3001 28.93 18.1501C28.93 16.9901 28 16.0601 26.84 16.0601Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/crf.svg" alt="crf" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineBecame") }}
            <a href="#">{{ $t("ExperienceFirstResponder") }}</a>
            {{ $t("AboutTimelineInside") }}
            <a href="#">{{ $t("CompanyRedCross") }}</a>
            {{ $t("AboutTimelineIn") }}
            <time datetime="21-01-2021">{{ $t("MounthMay") }}, 2022</time></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/origami.svg" alt="origami" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineAsWorked") }}
            <a href="#">{{ $t("ExperienceLifeguard") }}</a
            >{{ $t("AboutTimelineAt") }}
            <a href="#">{{ $t("CompanyOpalia") }}</a>
            {{ $t("AboutTimelineFrom") }}
            <time datetime="21-01-2021"
              >{{ $t("MounthFebruary") }} {{ $t("AboutTimelineTo") }}
              {{ $t("MounthMay") }}, 2022</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.09155 6.63659L9.78267 3.49965C11.2037 2.83345 12.7961 2.83345 14.2171 3.49965L20.9083 6.63664C22.3638 7.31899 22.3638 9.68105 20.9083 10.3634L14.2172 13.5003C12.7962 14.1665 11.2038 14.1665 9.78275 13.5003L4.99995 11.2581"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2.5 15V12.1376C2.5 10.8584 2.5 10.2188 2.83032 9.71781C3.16064 9.21687 3.74853 8.96492 4.92432 8.461L6 8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/lyon1.svg" alt="occitanie" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineStartedSchool") }}
            <a href="#">{{ $t("DegreeBUTInfo") }}</a>
            {{ $t("AboutTimelineAt") }}
            <a href="#">IUT Lyon 1</a>
            {{ $t("AboutTimelineIn") }}

            <time datetime="21-01-2021"
              >{{ $t("MounthSeptember") }}, 2021</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
          </svg>
        </span>
        <div class="timeline-item-description">
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineMoved") }} Lyon
            {{ $t("AboutTimelineIn") }}
            <time datetime="21-01-2021"
              >{{ $t("MounthSeptember") }}, 2021</time
            ></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/sdis.svg" alt="sdis" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineAsWorked")
            }}<a href="#">{{ $t("ExperienceLifeguard") }}</a
            >{{ $t("AboutTimelineAt") }}
            <a href="#">SDIS 34</a>
            {{ $t("AboutTimelineFrom") }}{{ $t("MounthJuly")
            }}{{ $t("AboutTimelineTo") }}{{ $t("MounthAugust") }}
            <time datetime="21-01-2021">, 2021</time></span
          >
        </div>
      </li>
      <li class="timeline-item">
        <span class="timeline-item-icon | faded-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.09155 6.63659L9.78267 3.49965C11.2037 2.83345 12.7961 2.83345 14.2171 3.49965L20.9083 6.63664C22.3638 7.31899 22.3638 9.68105 20.9083 10.3634L14.2172 13.5003C12.7962 14.1665 11.2038 14.1665 9.78275 13.5003L4.99995 11.2581"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2.5 15V12.1376C2.5 10.8584 2.5 10.2188 2.83032 9.71781C3.16064 9.21687 3.74853 8.96492 4.92432 8.461L6 8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="../assets/image/occitanie.svg" alt="occitanie" />
          </i>
          <span
            ><a href="#">Antoine</a> {{ $t("AboutTimelineEndedSchool") }}
            <a href="#">{{ $t("DegreeBaccalaureateScientific") }}</a>
            {{ $t("DegreeMentionGood") }} {{ $t("AboutTimelineAt") }}
            <a href="#">Lycée Jean Jaurès</a> {{ $t("AboutTimelineIn") }}
            <time datetime="20-01-2021"
              >{{ $t("MounthJune") }}, 2021</time
            ></span
          >
        </div>
      </li>
      <!-- <li class="timeline-item | extra-space">
        <span class="timeline-item-icon | filled-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
            />
          </svg>
        </span>
        <div class="timeline-item-wrapper">
          <div class="timeline-item-description">
            <i class="avatar | small">
              <img src="https://assets.codepen.io/285131/hat-man.png" />
            </i>
            <span
              ><a href="#">Yoan Almedia</a> commented on
              <time datetime="20-01-2021">Jan 20, 2021</time></span
            >
          </div>
          <div class="comment">
            <p>
              I've sent him the assignment we discussed recently, he is coming
              back to us this week. Regarding to our last call, I really enjoyed
              talking to him and so far he has the profile we are looking for.
              Can't wait to see his technical test, I'll keep you posted and
              we'll debrief it all together!😊
            </p>
            <button class="button">👏 2</button>
            <button class="button | square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 12a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7z"
                />
              </svg>
            </button>
          </div>
          <button class="show-replies">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-forward"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
            </svg>
            Show 3 replies
            <span class="avatar-list">
              <i class="avatar | small">
                <img src="https://assets.codepen.io/285131/hat-man.png" />
              </i>
              <i class="avatar | small">
                <img src="https://assets.codepen.io/285131/winking-girl.png" />
              </i>
              <i class="avatar | small">
                <img src="https://assets.codepen.io/285131/smiling-girl.png" />
              </i>
            </span>
          </button>
        </div>
      </li> -->
    </ol>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

*,
*:before,
*:after {
  box-sizing: border-box;
}
/* Some basic CSS overrides */
body {
  line-height: 1.5;
  min-height: 100vh;
  font-family: "Outfit", sans-serif;
  padding-top: 20vh;
  padding-bottom: 20vh;
}

button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.timeline-exit {
  padding: 1em;
}
.timeline-container {
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 60%;
  margin-bottom: 5vh;
}

.timeline-container h2 {
  font-size: 1.5rem;
  margin: 0;
  padding: 2rem;
  color: black;
  text-align: center;
}

.timeline {
  width: 85%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 0 32px 32px;
  border-left: 2px solid #e3e3e3;
  font-size: 1.125rem;
}

.timeline-item {
  display: flex;
  gap: 24px;
}

.timeline-item + * {
  margin-top: 24px;
}

.timeline-item + .extra-space {
  margin-top: 48px;
}

.new-comment {
  width: 100%;
}

.new-comment input {
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  height: 48px;
  padding: 0 16px;
  width: 100%;
}

.new-comment input::placeholder {
  color: #b2b2b2;
}

.new-comment input:focus {
  border-color: #b2b2b2;
  outline: 0;
  box-shadow: 0 0 0 4px #f4f6f8;
}

.timeline-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: -52px;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 0 0 6px #fff;
}

.timeline-item-icon svg {
  width: 20px;
  height: 20px;
}

.timeline-item-icon.faded-icon {
  background-color: #f4f6f8;
  color: #7b7b7b;
}

.timeline-item-icon.filled-icon {
  background-color: #688afd;
  color: #fff;
}

.timeline-item-description {
  display: flex;
  padding-top: 6px;
  gap: 8px;
  color: #7b7b7b;
}

.timeline-item-description i {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.timeline-item-description img {
  flex-shrink: 0;
}

.timeline-item-description a {
  color: #3d3d3d;
  font-weight: 500;
  text-decoration: none;
  font-weight: bold;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.avatar.small {
  width: 28px;
  height: 28px;
}

.avatar img {
  object-fit: cover;
}

.comment {
  margin-top: 12px;
  color: #3d3d3d;
  border: 1px solid #e3e3e3;
  box-shadow: 0 4px 4px 0 #f4f6f8;
  border-radius: 6px;
  padding: 16px;
  font-size: 1rem;
}

.button {
  border: 0;
  padding: 0;
  display: inline-flex;
  vertical-align: middle;
  margin-right: 4px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: 32px;
  padding: 0 8px;
  background-color: #f4f6f8;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 99em;
}

.button:hover {
  background-color: #e3e3e3;
}

.button.square {
  border-radius: 50%;
  color: #7b7b7b;
  width: 32px;
  height: 32px;
  padding: 0;
}

.button.square svg {
  width: 24px;
  height: 24px;
}

.button.square:hover {
  background-color: #e3e3e3;
  color: #3d3d3d;
}

.show-replies {
  color: #b2b2b2;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  cursor: pointer;
}

.show-replies svg {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.show-replies:hover,
.show-replies:focus {
  color: #3d3d3d;
}

.avatar-list {
  display: flex;
  align-items: center;
}

.avatar-list > * {
  position: relative;
  box-shadow: 0 0 0 2px #fff;
  margin-right: -8px;
}
</style>
